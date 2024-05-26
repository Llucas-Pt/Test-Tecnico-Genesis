
const { DataTypes } = require('sequelize'); // DataTypes é importado para definir tipos de dados para os campos da tabela.
const DBanco = require("./DBanco");

const Cadastrotb = DBanco.define('Paciente', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visitas: {
        type: DataTypes.JSON, //
        allowNull: false
    }
});

module.exports = Cadastrotb;
