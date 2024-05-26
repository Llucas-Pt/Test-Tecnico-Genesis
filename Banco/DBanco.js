//Importamos o Sequelize para facilita a interação com bancos SQLite
const { Sequelize } = require("sequelize");

const DBanco = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

module.exports = DBanco;
