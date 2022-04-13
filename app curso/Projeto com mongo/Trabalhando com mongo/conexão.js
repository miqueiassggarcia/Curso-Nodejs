const mongoose = require('mongoose');

// Conexão mongoose
    mongoose.connect("mongodb://localhost/bancoteste", {
        useNewUrlParser:true, useUnifiedTopology: true,
    }).then(() => {
        console.log("conectado");
    }).catch((err) => {
        console.log("Houve um erro na conexão "+erro);
    })

// Model - Usuários
// Definindo model
const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    sobrenome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    idade: {
        type: Number,
        require: true,
    },
    pais: {
        type: String
    }
})

// Informando Collection
    mongoose.model("usuarios", UserSchema);

// Adicionando usuário
    const addUser = mongoose.model('usuarios');

    new addUser({
        nome : "Antônio",
        sobrenome: "Garcia",
        email: "antonio@gmail.com",
        idade: 20,
        pais: "Brasil",
    }).save().then(() => {
        console.log("usuario adicionado")
    }).catch((err) => {
        console.log("ERRO ao cadastrar usuario: "+err)
    });