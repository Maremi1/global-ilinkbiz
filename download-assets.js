import fs from 'fs';
import path from 'path';
import https from 'https';

const getFiles = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else if (filePath.endsWith('.asset.json')) {
      filesList.push(filePath);
    }
  }
  return filesList;
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const main = async () => {
  const assetFiles = getFiles(path.join(process.cwd(), 'src'));
  console.log(`Found ${assetFiles.length} asset files.`);

  for (const file of assetFiles) {
    try {
      const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
      const { project_id, url: assetUrl } = content;
      if (!project_id || !assetUrl) continue;

      const remoteUrl = `https://${project_id}.lovableproject.com${assetUrl}`;
      const localDest = path.join(process.cwd(), 'public', assetUrl);

      // Create directories
      fs.mkdirSync(path.dirname(localDest), { recursive: true });

      if (fs.existsSync(localDest)) {
        console.log(`Already exists: ${assetUrl}`);
        continue;
      }

      console.log(`Downloading: ${remoteUrl} to ${localDest}`);
      await downloadFile(remoteUrl, localDest);
      console.log(`Success: ${assetUrl}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
};

main();
