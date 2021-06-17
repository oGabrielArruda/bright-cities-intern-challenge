'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      descricao: {
        type:  Sequelize.STRING,
        allowNull: false,
      }, 
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },   
    });     
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('todos');
     
  }
};