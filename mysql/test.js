const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso");
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro);
});

// Criação das tabelas
// Postagem
const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
});

// Adicionar dados
// postagem.create({
//     titulo: "TITULO QUALQUER",
//     conteudo: "CONTEUDO QUALQUER",
// });

// Usuario
const usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// usuario.create({
//     nome: "Miquéias",
//     sobrenome: "Garcia",
//     idade: 18,
//     email: "miqueias@gmail.com",
// });

// usuario.sync({force: true});

// postagem.sync({force: true});