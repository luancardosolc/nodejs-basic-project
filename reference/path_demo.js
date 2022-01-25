const path = require('path');

// Base file name
console.log('Base file name', path.basename(__filename));

// Directory name
console.log('Directory name', path.dirname(__filename));

// File Extension
console.log('File Extension', path.extname(__filename));

// Create path object
console.log('Create path object', path.parse(__filename));
