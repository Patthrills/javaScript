let http = require('http');
let url = require('url')
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
   return res.end();
}).listen(8084)