var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res)=>{
    var access = url.parse(req.url, true);
    var path = `.${access.pathname}test.html`;
    fs.readFile(path,  (err, data)=>{
        if(err){
            res.writeHead(404,  {'Content-Type': 'text/html'});
            res.write(err);
        }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
    })
}).listen(7878)
