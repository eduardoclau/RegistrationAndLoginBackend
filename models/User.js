const mongoose = require('mongoose');

//Create User Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        minlength: 6
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    date: {
        type: Date,
        default: Date.now
    }
});




const User = mongoose.model('User', userSchema);

module.exports = User
