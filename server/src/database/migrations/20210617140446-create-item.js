'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('todo_item', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'status', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      descricao: {
        type:  Sequelize.STRING,
        allowNull: false,
      },    
    });     
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('todo_item');
     
  }
};