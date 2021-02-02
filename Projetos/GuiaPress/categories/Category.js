const Sequelize = require('sequelize')
const Connection = require('../database/Database')

const Category = Connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Category
