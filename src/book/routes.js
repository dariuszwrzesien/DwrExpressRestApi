'use strict';

const express = require('express');
const router = express.Router();

const getBook = require('./controller/getBook');
const getBooks = require('./controller/getBooks');
const createBook = require('./controller/createBook');
const updateBook = require('./controller/updateBook');
const deleteBook = require('./controller/deleteBook');

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.put('/', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
