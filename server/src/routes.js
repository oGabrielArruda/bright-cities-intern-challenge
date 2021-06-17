const express = require('express');
const StatusController = require('./controllers/StatusController');
const TodoController = require('./controllers/TodoController');

const router = express.Router();

router.get('/status/:id?', StatusController.index);
router.post('/status', StatusController.store);
router.put('/status/:id', StatusController.edit);
router.delete('/status/:id', StatusController.remove);

router.get('/todo/:id?', TodoController.index);
router.post('/todo', TodoController.store);
router.put('/todo/:id', TodoController.edit);
router.delete('/todo/:id', TodoController.remove);


module.exports = router;