const express = require('express');
const router = express.Router();

const { getAllAuthors, createAuthor, getAuthorById, updateAuthorById, deleteAuthorById } = require('../controller/authorController');

router.get('/all', getAllAuthors);
router.post('/new', createAuthor);
router.get('/:id', getAuthorById);
router.put('/update/:id', updateAuthorById);
router.delete('/delete/:id', deleteAuthorById);


module.exports = router;