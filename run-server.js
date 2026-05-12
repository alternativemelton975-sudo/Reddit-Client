const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 5000;
const buildDir = path.join(__dirname, 'build');

const getContentType = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html';
    case '.js': return 'application/javascript';
    case '.css': return 'text/css';
    case '.json': return 'application/json';
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.svg': return 'image/svg+xml';
    case '.webp': return 'image/webp';
    default: return 'application/octet-stream';
  }
};

const server = http.createServer((req, res) => {
  let requestedPath = decodeURIComponent(req.url.split('?')[0]);
  if (requestedPath === '/') {
    requestedPath = '/index.html';
  }

  const filePath = path.join(buildDir, requestedPath);

  const sendFile = (targetPath) => {
    fs.readFile(targetPath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': getContentType(targetPath) });
      res.end(content);
    });
  };

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      sendFile(filePath);
      return;
    }

    // Serve index.html for SPA fallback routes
    sendFile(path.join(buildDir, 'index.html'));
  });
});

server.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
  console.log('Serve your production build after running `npm run build`.');
});
