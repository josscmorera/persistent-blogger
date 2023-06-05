const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const authorSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
