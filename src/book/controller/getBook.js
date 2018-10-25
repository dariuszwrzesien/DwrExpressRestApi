'use strict';

const Book = require('./../model/book');

async function getBook(req, res) {
    try {
        const books = await Book.findById(req.params.id);
        return res.json(books);
    } catch (err) {
        console.log(err);
    }
}

module.exports = getBook;