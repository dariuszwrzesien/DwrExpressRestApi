'use strict';

const bodyParser = require('body-parser');

const healthCheck = require('./healthCheck/routes');
const authorization = require('./middleware/authorization');
const books = require('./book/routes');

function register(app) {
    app.use('/api/health-check', healthCheck);
    // app.use(authorization);
    app.use(bodyParser.json({limit: '1mb'}));
    app.use('/api/books', books);
}

module.exports = {
    register
};
