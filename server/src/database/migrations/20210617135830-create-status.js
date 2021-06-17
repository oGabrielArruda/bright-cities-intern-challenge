'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('status', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type:  Sequelize.STRING,
        allowNull: false,
      }
    });     
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('status');
     
  }
};