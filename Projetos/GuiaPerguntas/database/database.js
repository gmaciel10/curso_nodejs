const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','#Skynet@2019',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;