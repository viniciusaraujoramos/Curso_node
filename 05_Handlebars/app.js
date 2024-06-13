const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//configuração
    //Template Engine
    app.engine('handlebars', handlebars({
        
    }))

app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
}) //criou servidor e está escutando a porta

