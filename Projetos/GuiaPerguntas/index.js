const express = require('express');
const app = express();

app.get ('/', function(req,res){
  res.render('index.ejs')
})

// Estou dizendo para o express utilizar o ejs como motor.
app.set('view engine', 'ejs');

app.listen(8081, function(erro){
    if (erro){
        console.log('existe um erro');
    }
    else{
        console.log('Rodando perfeitamente!');
    }
})