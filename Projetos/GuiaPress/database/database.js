const Sequelize = require('sequelize')

const Connection = new Sequelize('guiapress', 'lab', 'lab123', {
    host: 'localhost',
    dialect: 'mysql',
    timezone:'-03:00'
})

module.exports = Connection