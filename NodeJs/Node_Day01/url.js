var url = require('url');
var adr = 'https://facebook.com';
var par = url.parse(adr, true);

console.log(par.host);
console.log(par.pathname);
console.log(par.search);
console.log(par.query);
console.log(par.query.month);
console.log(par.port);
console.log(par.protocol);