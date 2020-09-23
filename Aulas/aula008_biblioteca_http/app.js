var http = require('http');

http.createServer(function(request,response){
    response.end("<h1>Teste</h1>");
}).listen(8081);