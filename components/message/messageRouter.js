const express = require('express');
const router = express.Router();
const messageController = require('./messageController');


// Defined two endpoint for messages one for getting messages and one for creating messages
router.get('/getLastTen', messageController.getLastTenMessages);
router.post('/create', messageController.createMessage);

module.exports = router;