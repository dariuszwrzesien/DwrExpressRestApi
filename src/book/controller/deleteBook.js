'use strict';

const Book = require('./../model/book');

async function deleteBook(req, res) {
    try {
        await Book.findOneAndDelete(req.params.id);
        return res.status(200).send('OK');
    } catch (err) {
        console.log(err);
    }
}

module.exports = deleteBook;