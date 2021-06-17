const express = require('express');
const TodoController = require('./controllers/TodoController');

const router = express.Router();

router.get('/todos/:id?', TodoController.index);
router.post('/todos', TodoController.store);
router.put('/todos/:id', TodoController.edit);
router.delete('/todos/:id', TodoController.remove);


module.exports = router;