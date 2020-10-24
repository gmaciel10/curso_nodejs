const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

//database conection

connection
    .authenticate()
    .then(() => {
        console.log('conexão feita com o banco de dados!')
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

//bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.render("index");
});

app.get('/perguntar', function (req, res) {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send('formulário recebido ' + titulo + descricao);
});

app.listen(8080, () => {
    console.log('App rodando');
});