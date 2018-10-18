const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost/test');
const Book = require('./models/book');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const apiRouter = require('./routing')(Book);

app.use('/api', apiRouter);

app.get('/', (req, res) => {
   res.send('welcome home');
});

app.listen(port, () => {
   console.info('Running on PORT: ' + port);
});