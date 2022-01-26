const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end('<h1>Home</h1>');
   }
   if (req.url === '/about') {
      res.end('<h1>About page</h1>');
   }
});

// Variables
const PORT = process.env.PORT || 5003;

server.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
