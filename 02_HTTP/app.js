//SOLICITAR MODULO INTERNO DO NODE CHAMADO HTTP

var Http = require('http')

//ABRINDO UM SERVIDOR HTTP

Http.createServer(function(req,res){
    res.end('O dia que um dos drake perder pra spin vai virar muchilinha pra dar uma refletida')
}).listen(8081)

console.log('Servidor rodando...')