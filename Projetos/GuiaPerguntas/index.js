const express = require('express');
const app = express();

app.set('view engine','ejs')

app.get("/:nome/:lang" ,function(req,res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    var produtos = [
        {nome:"coca-cola",preco:5},
        {nome:"leite",preco:1.45},
        {nome:"doritos",preco:3.14},
        {nome:"carne",preco:15},
        {nome:"redbul",preco:5}
    ]
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Alcans",
        inscritos: 8040,
        msg: exibirMsg,
        produtos:produtos
    });
});

app.listen(8082,()=> {console.log('App rodando');});