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

Category.hasMany(Article)
Article.belongsTo(Category)

Article.sync({force:false})

module.exports = Article