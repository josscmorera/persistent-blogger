const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const blogSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    title: { type: String, required: true },
    content: { type: String, required: true, maxlength: 500 },
    author: { type: String, ref: 'Author', required: true },
    lastModified: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;