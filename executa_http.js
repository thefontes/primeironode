var http = require('http');

//cria um objeto servidor
http.createServer(function (req, res) {
    res.write('Servidor Ativo'); //
    res.end();
}).listen(8081);