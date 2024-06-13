const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log('CONECTADO COM SUCESSO!')
// }).catch(function(erro){
//     console.log('Houve o seguinte erro: '+erro)
// })

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

// Postagem.sync(force = true)
// Usuario.sync(force = true)

// Postagem.create({
//     titulo:'PRIMEIRA POSTAGEM',
//     conteudo:'Conteudo da primeira postagem.BLABLABLA...'
// })

Usuario.create({
    nome:'Vinícius',
    sobrenome:'Araujo Ramos',
    idade:17,
    email:'vinicius.ara.ramos@gmail.com'
})