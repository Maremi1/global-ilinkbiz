#!/usr/bin/env node
import { readdir, mkdir, copyFile, rm, stat } from 'fs/promises';
import fs from 'fs';
import path from 'path';

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await copyFile(srcPath, destPath);
    }
  }
}

async function run() {
  const root = path.resolve('dist');
  const client = path.join(root, 'client');
  const server = path.join(root, 'server');

  if (!fs.existsSync(root)) {
    console.log('No dist/ directory found — nothing to flatten.');
    return;
  }

  if (fs.existsSync(client)) {
    console.log('Flattening dist/client -> dist/ ...');
    await copyDir(client, root);
    try {
      await rm(client, { recursive: true, force: true });
      console.log('Removed dist/client');
    } catch (err) {
      console.warn('Failed to remove dist/client:', err);
    }
  } else {
    console.log('No dist/client found — nothing to move.');
  }

  if (fs.existsSync(server)) {
    console.log('Removing dist/server (not needed for static document root)...');
    try {
      await rm(server, { recursive: true, force: true });
      console.log('Removed dist/server');
    } catch (err) {
      console.warn('Failed to remove dist/server:', err);
    }
  }

  const shellHtml = path.join(root, '_shell.html');
  const indexHtml = path.join(root, 'index.html');
  if (fs.existsSync(shellHtml) && !fs.existsSync(indexHtml)) {
    console.log('Copying _shell.html to index.html for SPA mode...');
    await copyFile(shellHtml, indexHtml);
  }

  console.log('Flatten complete. Document root is `dist/`.');
}

run().catch((err) => {
  console.error('Error flattening dist:', err);
  process.exit(1);
});
