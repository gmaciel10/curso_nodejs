const express = require('express')
const router = express.Router()

router.get('/articles', (req, res) => {
    res.send('Página principal articles')
})

router.get('/admin/articles/new', (req, res) => {
    res.send('Página de criação de um novo artigo')
})

module.exports = router