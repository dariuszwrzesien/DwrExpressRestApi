'use strict';

const Book = require('./../model/book');

async function createBook(req, res) {
    try {
        const book = new Book(req.body);
        await book.save();
        return res.status(201).json(book);
    } catch (err) {
        console.error(err);
    }
}

module.exports = createBook;
