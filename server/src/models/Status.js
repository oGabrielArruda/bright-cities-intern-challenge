const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Status extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'status',
            timestamps: false,
        })
    }

    static associate(models) {
        this.hasMany(models.Todo, { foreignKey: 'status_id', as: 'owner' });
    }
}

module.exports = Status;