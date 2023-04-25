const Router = require('express').Router;
const Controller = require('./controller.js');
const router = new Router();

router.post('/login', Controller.login);
router.get('/chats', Controller.getChats);
router.get('/users', Controller.searchUsers);
router.post('/addFriend', Controller.addFriend);
router.post('/message', Controller.sendMessage);
router.get('/messages', Controller.getMessages);

module.exports = router;