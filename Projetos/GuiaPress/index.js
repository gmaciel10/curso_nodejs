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
app.use('/', categoriesController)
app.use('/', articlesController)

Connection
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida')
    })
    .catch((error) => {
        console.log(error)
    })

app.get('/', (req, res) => {

    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll()
            .then(categories => {
                res.render('index', {
                    articles: articles,
                    categories: categories
                })
            })
    })
})

app.get('/:slug', (req, res) => {
    var slug = req.params.slug

    Article.findOne({
        where: { slug: slug }
    }).then(article => {
        if (article != undefined) {
            res.render('article', {
                article: article
            })
        }
        else {
            res.redirect('/')
        }
    })
        .catch(err => {
            res.redirect('/')
        })
})

app.get('/category/:slug', (req, res) => {
    var slug = req.params.slug

    Category.findOne({
        where: {
            slug:slug
        },
        include:[{model: Article}]
    }).then(category => {
        if (category != undefined) {
            Category.findAll()
                .then(categories => {
                    res.render('index', {
                        articles: category.articles,
                        categories:categories
                    })
                })
        }
        else {
            res.redirect('/')
        }
    })
        .catch(err => {
            res.redirect('/')
        })
})

app.listen('9090', () => {
    console.log('Porta do sistema estabelecida')
})