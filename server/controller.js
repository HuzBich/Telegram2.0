const Chat = require('./models/ChatModel');
const User = require('./models/UserModel');

class Controller {
    async login(req, res) {
        try {
            const username = req.body.userName;
            const user = await User.findOne({username});
            if (!user) {
                await User.create({username});
            }
            res.status(200);
        } catch (e) {
            res.json({error: e.message}).status(500);
        }
    }
    async getChats(req, res) {
        try {
            const {userName} = req.query;
            const user = await User.findOne({username: userName});
            res.json(user.friends)
        } catch (e) {
            res.json({error: e.message}).status(500);
        }
    }

    async searchUsers(req, res) {
        try {
            const {search} = req.query;
            const users = await User.find({username: {$regex: search, $options: 'i'}});
            res.json(users.map(user => user.username));
        } catch (e) {
            res.json({error: e.message}).status(500);
        }
    }


    async addFriend(req, res) {
        try {
            const {userName, friendName} = req.body;
            const user1 = await User.findOne({username: userName});
            const user2 = await User.findOne({username: friendName});
            if (!user1 || !user2) {
                return res.status(400);
            }
            if (user1.friends.includes(friendName) || user2.friends.includes(userName)) {
                return res.status(400);
            }
            await Chat.create({users: [userName, friendName]});
            user1.friends.push(friendName);
            user2.friends.push(userName);
            user1.save();
            user2.save();
            res.status(200);
        } catch (e) {
            res.json({error: e.message}).status(500);
        }
    }

    async sendMessage(req, res) {
        try {
            const {userName, activeChat, messageText} = req.body;
            const chat = await Chat.findOne({users: { "$in" : [userName, activeChat]}});
            if (!chat) {
                return res.status(400);
            }
            chat.messages.push({sender: userName, text: messageText});
            chat.save();
            res.status(200);
        } catch (e) {
            res.json({error: e.message}).status(500);
        }
    }

    async getMessages(req, res) {
        try {
            const {userName, activeChat} = req.query;
            const chat = await Chat.findOne({users: { "$in" : [userName, activeChat]}});
            if (!chat) {
                return res.status(400).json({error: 'Chat not found'});
            }
            res.json(chat.messages);
        } catch (e) {
            res.json({error: e.message}).status(500);
        }
    }
}

module.exports = new Controller();