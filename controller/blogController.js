const Blog = require('../model/blog');

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, data: blogs });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const createBlog = async (req, res) => {
    const blog = new Blog(req.body);
    try {
        const savedBlog = await blog.save();
        res.status(201).json({ success: true, data: savedBlog });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            res.status(200).json({ success: true, data: blog });
        } else {
            res.status(400).json({ success: false, message: 'Blog not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const updateBlogById = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { ...req.body, lastModified: Date.now() },
            { new: true, runValidators: true }
        );
        if (updatedBlog) {
            res.status(200).json({ success: true, data: updatedBlog });
        } else {
            res.status(400).json({ success: false, message: 'Blog not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


const deleteBlogById = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (deletedBlog) {
            res.status(200).json({ success: true, message: 'Blog successfully deleted' });
        } else {
            res.status(400).json({ success: false, message: 'Blog not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlogById,
    deleteBlogById,
};
