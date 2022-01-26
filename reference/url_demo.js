const url = require('url');

const myUrl = new URL('http://google.com?id=100&status=active');

// Serialized URL
console.log('Serialized URL', myUrl.href);

// All URL data (origin, protocol, host, etc)
console.log('Serialized URL', myUrl);

// Add Params
myUrl.searchParams.append('abc', '123');
console.log('Search Params:', myUrl.searchParams);
