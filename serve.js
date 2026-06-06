const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3002;
const DIR  = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(DIR, url);
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('READY');
  console.log('NutriScan prototype at http://localhost:' + PORT);
});

