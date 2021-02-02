const Sequelize = require('sequelize')
const Connection = require('../database/Database')

const Category = require('../categories/Category')

const Article = Connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


Article.belongsTo(Category)

module.exports = Article