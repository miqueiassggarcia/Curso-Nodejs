const express = require('express');
const app = express();

//Rotas na url
app.get("/", function(req, res) {
    res.send("Seja bem vindo a isso");
});

app.get("/sobre", function(req, res) {
    res.send("Bem vindo ao sobre");
});

app.get("/blog", function(req, res) {
    res.send("Bem vindo ao blog");
});

//parâmetros passados na url
app.get("/ola/:cargo/:nome/:lang", function(req, res) {
    res.send("<h1>Hello "+req.params.cargo+" "+req.params.nome+" you working with the tecnology "+req.params.lang+"</h1>");
    //a função send só poderá ser enviada uma vez
})

app.get("/html", function(req, res) {
    res.sendFile(__dirname+'/HTML/index.html');
})

//Definiçaõ da porta
app.listen(8081, function() {
    console.log('Servidor aberto na porta 8081');
});