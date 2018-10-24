'use strict';

const Book = require('./../model/book');

async function getBooks(req, res) {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (err) {
        console.log(err);
    }
}

module.exports = getBooks;