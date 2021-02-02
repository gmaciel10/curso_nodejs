const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Controller
const categoriesController = require('./categories/categoriesController')
const articlesController = require('./articles/articleController')

//Models
const Category = require('./categories/Category')
const Article = require('./articles/Article')

const Connection = require('./database/Database')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static('public'))

Connection
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida')
    })
    .catch((error) => {
        console.log(error)
    })

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.use('/',categoriesController)

app.listen('9090', () => {
    console.log('Porta do sistema estabelecida')
})