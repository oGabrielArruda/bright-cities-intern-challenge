const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Todo = require('../models/Todo');
const Status = require('../models/Status');

const connection = new Sequelize(dbConfig);

Todo.init(connection);
Status.init(connection);

Todo.associate(connection.models);
Status.associate(connection.models);

module.exports = connection;
