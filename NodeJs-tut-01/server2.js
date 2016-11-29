var http = require("http");

var server_logic = 

http.createServer(function(request, response){
    
    var HTTP_STATUS = 200;//OK
    var CONTENT_TYPE = "text/html"

    response.writeHead(HTTP_STATUS, {'Content-Type' : CONTENT_TYPE});
    response.end('<html><h1>Hello NodeJS</h1></html>');

}).listen(4040);

console.log("Server is running at http://localhost:4040/");
