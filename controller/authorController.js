const Author = require('../model/Author');
const Blog = require('../model/blog');

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json({ success: true, data: authors });
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
}

const createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        const saveAuthor = await newAuthor.save();
        res.status(200).json({ success: true, data: saveAuthor });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (author) {
            const blogs = await Blog.find({ author: author._id }).populate('author', 'name');
            res.status(200).json({ success: true, data: { author, blogs } });
        } else {
            res.status(404).json({ success: false, message: 'Author not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const updateAuthorById = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedAuthor) {
            return res.status(404).json({ success: false, message: 'Author not found' });
        }

        res.status(200).json({ success: true, data: updatedAuthor });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteAuthorById = async (req, res) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);

        if (!deletedAuthor) {
            return res.status(404).json({ success: false, message: 'Author not found' });
        }

        res.status(200).json({ success: true, data: deletedAuthor });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    getAllAuthors,
    createAuthor,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById
}