const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
    // Other fields, if needed
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
