const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database.js');

connection
    .authenticate()
    .then(()=>{
        console.log('conectado no banco');
    })
    .catch((msgErro) =>{
        console.Console(msgErro);
    })

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(8083,()=>{
    console.log('rodando');
});