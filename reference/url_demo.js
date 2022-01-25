const url = require('url');

const myUrl = new URL('http://google.com?id=100&status=active');

// Serialized URL
console.log('Serialized URL', myUrl.href);
