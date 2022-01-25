const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created...')
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
  if (err) throw err;
  console.log('File created...')
});

// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), { encoding: 'utf-8'}, (err, data) => {
  if (err) throw err;
  console.log('Reading file:', data);
});
