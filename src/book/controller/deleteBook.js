'use strict';

const Book = require('./../model/book');

async function deleteBook(req, res) {
    try {
        await Book.findOneAndDelete(req.params.id);
        res.status(200).send('OK').end();
    } catch (err) {
        console.log(err);
    }
}

module.exports = deleteBook;