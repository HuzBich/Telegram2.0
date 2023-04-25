const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    friends: {
        type: [String],
        default: [],
    },
});

module.exports = mongoose.model('User', userSchema);

