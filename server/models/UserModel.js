const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    refCode: {
        type: String,
        required: true,
        unique: true,
    },
    admin: {
        type: String,
        required: true
    },
    isUsed: {
        type: Boolean,
        default: false,
        required: true
    },
    wallet: {
        type: String,
    },
    ip: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
});

module.exports = mongoose.model('User', userSchema);

