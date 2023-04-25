const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    users: {
        type: [String],
    },
    messages: {
        type: [{
            sender: String,
            text: String,
        }],
        default: [],
    },
});

module.exports = mongoose.model('Chat', chatSchema);

