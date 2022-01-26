const http = require('http');

// Create server object
http
  .createServer((req, res) => {
    // Write response
    res.write('Hello World from http_demo');
    res.end();
  })
  .listen(5003, () => console.log('Server running...'));

