const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
         if (err) throw err;
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.end(content);
      })
   }
   if (req.url === '/about') {
      fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
         if (err) throw err;
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.end(content);
      })
   }
   if (req.url === '/api/users') {
      const users = [
         { name: 'Luan', age: 30 },
         { name: 'Julia', age: 28 }
      ];

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
   }
});

// Variables
const PORT = process.env.PORT || 5003;

server.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
