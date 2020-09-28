var express = require('express'); // importando o express
var app = express(); // iniciando o express

app.get('/:nome/:empresa', function(req,res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send('Olá '+nome+' da empresa '+empresa);
});

app.get('/blog/:artigo?',function(req,res){
    var artigo = req.params.artigo;

    if (artigo){
        res.send('Artigo existe');
    }else{
        res.send('Artigo não existe');
    }
})

app.listen(4000,function(erro){
    if (erro){
        console.log("xiii erro")
    }else{
        console.log('ta tudo certo')
    }
})