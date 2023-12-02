const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    iin: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true
    },
    projectTheme: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('users', userSchema)
