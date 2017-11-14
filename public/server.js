var http = require('http');
const porta = 3000;

http.createServer(function(request, result) {
    
    console.log('papai');
    result.end('papai');

}).listen(porta, function() {
    
    console.log('servidor iniciado na porta '+ porta);
});