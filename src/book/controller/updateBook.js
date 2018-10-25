'use strict';

const Book = require('./../model/book');

async function updateBook(req, res) {
    try {
        const book = await Book.findById(req.body.id);
        if (book) {
            book.set({
                title: req.body.title,
                author: req.body.author,
                read: req.body.read
            });

            await book.save(book);
            return res.send(book);
        }
        return res.status(204).send('No Content');
    } catch (err) {
        console.error(err);
    }
}

module.exports = updateBook;