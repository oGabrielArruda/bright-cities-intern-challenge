const express = require('express');
const StatusController = require('./controllers/StatusController');

const router = express.Router();

router.get('/status/:id?', StatusController.index);
router.post('/status', StatusController.store);
router.put('/status/:id', StatusController.edit);
router.delete('/status/:id', StatusController.remove);


module.exports = router;