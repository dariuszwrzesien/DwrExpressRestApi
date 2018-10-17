const express = require('express');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/test');

const Book = require('./models/book');


const app = express();
const port = process.env.PORT || 3000;

const apiRouter = express.Router();

apiRouter.route('/books')
    .get((req,res) => {
        const query = req.query;
        Book.find(query, (err, books) => {
            if (err) {
                console.error(err)
            } else {
                res.json(books);
            }
        });
    });
apiRouter.route('/books/:id')
    .get((req,res) => {
        Book.findById(req.params.id, (err, book) => {
            if (err) {
                console.error(err)
            } else {
                res.json(book);
            }
        })
    });


app.use('/api', apiRouter);

app.get('/', (req, res) => {
   res.send('welcome home');
});

app.listen(port, () => {
   console.info('Running on PORT: ' + port);
});