const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Todo extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status_owner' });
    }
}

module.exports = Todo;