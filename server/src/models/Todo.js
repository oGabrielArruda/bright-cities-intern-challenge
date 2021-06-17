const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Todo extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
            completed: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
}

module.exports = Todo;