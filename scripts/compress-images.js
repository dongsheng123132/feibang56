/**
 * 图片压缩脚本：压缩 public 与 上级目录“照片”中的 JPG/PNG
 * - JPG: 使用 mozjpeg，quality=70，最大宽度 1920
 * - PNG: 保留透明通道，compressionLevel=9，最大宽度 1920
 * 压缩为覆盖写入（原地替换），同时输出对比日志
 */

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const projectRoot = process.cwd();
const targets = [
  path.join(projectRoot, 'public'),
  path.resolve(projectRoot, '..', '照片'),
];

const exts = new Set(['.jpg', '.jpeg', '.png']);

async function ensureDirExists(dir) {
  try {
    await fsp.access(dir);
    return true;
  } catch {
    return false;
  }
}

async function* walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

function formatSize(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  let val = bytes;
  while (val >= 1024 && i < units.length - 1) {
    val /= 1024;
    i++;
  }
  return `${val.toFixed(1)} ${units[i]}`;
}

async function compressFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return false;

  const beforeStat = await fsp.stat(file);
  const beforeSize = beforeStat.size;

  const img = sharp(file, { failOnError: false });
  const meta = await img.metadata();

  const width = meta.width || undefined;
  const shouldResize = width && width > 1920;

  let pipeline = img;
  if (shouldResize) {
    pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 70, mozjpeg: true });
  } else if (ext === '.png') {
    // 保留透明通道，尽可能压缩
    pipeline = pipeline.png({ compressionLevel: 9 });
  }

  const tmpFile = file + '.tmp';
  await pipeline.toFile(tmpFile);

  const afterStat = await fsp.stat(tmpFile);
  const afterSize = afterStat.size;

  // 只有在文件更小或者尺寸变更时才替换
  if (afterSize < beforeSize || shouldResize) {
    await fsp.rename(tmpFile, file);
    console.log(`✓ ${path.relative(projectRoot, file)}  ${formatSize(beforeSize)} -> ${formatSize(afterSize)}${shouldResize ? '  (resize)' : ''}`);
  } else {
    await fsp.unlink(tmpFile);
    console.log(`- ${path.relative(projectRoot, file)}  未改善，保持原图 (${formatSize(beforeSize)})`);
  }
  return true;
}

async function run() {
  let processed = 0;
  for (const dir of targets) {
    const exists = await ensureDirExists(dir);
    if (!exists) {
      console.log(`跳过：目录不存在 -> ${dir}`);
      continue;
    }
    console.log(`\n扫描目录：${dir}`);
    for await (const file of walk(dir)) {
      try {
        await compressFile(file);
        processed++;
      } catch (err) {
        console.warn(`! 处理失败：${file}`, err.message);
      }
    }
  }
  console.log(`\n完成，处理文件数：${processed}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});