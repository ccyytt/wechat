var http = require('http')

var app = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('我的天呐')
}).listen(80)