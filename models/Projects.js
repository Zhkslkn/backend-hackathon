const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const ProjectsSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    nameFirst: {
        type: String,
        required: true
    },
    surnameFirst: {
        type: String,
        required: true
    },
    iinFirst: {
        type: String,
        required: true
    },
    nameSecond: {
        type: String,
        required: true
    },
    surnameSecond: {
        type: String,
        required: true
    },
    iinSecond: {
        type: String,
        required: true
    },
    nameThird: {
        type: String,
        required: true
    },
    surnameThird: {
        type: String,
        required: true
    },
    iinThird: {
        type: String,
        required: true
    },
    nameFourth: {
        type: String,
        required: true
    },
    surnameFourth: {
        type: String,
        required: true
    },
    iinFourth: {
        type: String,
        required: true
    },
    projectFile: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('projects', ProjectsSchema)
