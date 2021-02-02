const express = require('express')
const router = express.Router()
const Category = require('./Category')
const slugify = require('slugify')

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new.ejs')
})

router.get('/admin/categories', (req, res) => {
    Category.findAll({
        order: [
            ['id','ASC']
        ]
    })
        .then(categories => {
            res.render('admin/categories/index.ejs', {
                categories:categories
        })
    })
})

router.post('/categories/save', (req, res) => {
    var title = req.body.title
    if ((title != "") && (title != undefined) && (title != null)) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/admin/categories/new')
        })
    }
    else {
        res.redirect('/')
        alert('Prencha o campo da categoria')
    }
})

module.exports = router