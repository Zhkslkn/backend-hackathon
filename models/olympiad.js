const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const olympiadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    class: {
        type: Number,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    teacherSurname: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    iin: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('olympiads', olympiadSchema)
