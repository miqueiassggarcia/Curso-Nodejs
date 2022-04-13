const Sequelize = require('sequelize');

// Conexão com o MySql
const sequelize = new Sequelize('postapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Teste
sequelize.authenticate().then(function(){
    console.log('conectado');
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}