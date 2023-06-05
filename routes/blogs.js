const express = require('express');
const router = express.Router();
const { getAllBlogs, createBlog, getBlogById, updateBlogById, deleteBlogById } = require('../controller/blogController');

router.get('/all', getAllBlogs);
router.post('/new', createBlog);
router.get('/:id', getBlogById);
router.put('/update/:id', updateBlogById);
router.delete('/delete/:id', deleteBlogById);

module.exports = router;