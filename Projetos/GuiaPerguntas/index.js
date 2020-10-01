const express = require('express');
const app = express();

app.get('*/:nome/:linguagem', function (req, res) {
    var nome = req.params.nome;
    var linguagem = req.params.linguagem;
    res.render('index.ejs',{
        nome:nome,
        linguagem: linguagem,
        empresa: 'GuiaDoProgramador',
        inscritos: 8000
    });
})

// Estou dizendo para o express utilizar o ejs como motor.
app.set('view engine', 'ejs');

app.listen(8081, function (erro) {
    if (erro) {
        console.log('existe um erro');
    } else {
        console.log('Rodando perfeitamente!');
    }
})