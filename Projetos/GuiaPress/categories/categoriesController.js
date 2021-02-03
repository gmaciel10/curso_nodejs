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
            ['id', 'ASC']
        ]
    })
        .then(categories => {
            res.render('admin/categories/index.ejs', {
                categories: categories
            })
        })
})

router.post('/categories/save', (req, res) => {
    var title = req.body.title
    if ((title != "") && (title != undefined) && (title != null)) {
        Category.findAll({
            where: { title: title }
        }).then(duplicate => {
            if (duplicate == false) {
                Category.create({
                    title: title,
                    slug: slugify(title)
                }).then(() => {
                    res.redirect('/admin/categories/new')
                })
            }
            else {
                res.send('ja tem criado')
            }
        })
            .catch((erro) => {
                res.redirect('/admin/categories')
            })
    }
    else {
        res.redirect('/admin/categories')
    }
})
router.post('/categories/delete', (req, res) => {
    var id = req.body.id

    if (id != undefined) {
        if (!isNaN(id)) {
            Category.destroy({
                where: { id: id }
            }).then(() => {
                res.redirect('/admin/categories')
            })
        }
        else {
            res.redirect('/admin/categories')
        }
    }
    else {
        res.redirect('/admin/categories')
    }
})

router.get('/admin/categories/edit/:id', (req, res) => {
    var id = req.params.id

    if (isNaN(id)) {
        res.redirect('/admin/categories')
    }

    Category.findByPk(id).then(category => {
        if (category != undefined) {
            res.render('admin/categories/edit', {
                category: category
            })
        }
        else {
            res.redirect('/admin/categories')
        }
    })
        .catch((erro) => {
            res.redirect('/admin/categories')
        })
})

router.post('/categories/update', (req, res) => {
    var title = req.body.title
    var id = req.body.id
    if ((title != "") && (title != undefined)) {
        Category.findAll({
            where: { title: title }
        }).then(duplicate => {
            if (duplicate == false) {
                Category.update({
                    title: title,
                    slug: slugify(title)
                }, {
                    where:{id:id}
                }).then(() => {
                    res.redirect('/admin/categories')
                })
            }
            else {
                res.send('ja tem criado')
            }
        })
            .catch((erro) => {
                res.redirect('/admin/categories')
            })
    }
    else {
        res.redirect('/admin/categories')
    }
})

module.exports = router