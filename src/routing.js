'use strict';

const bodyParser = require('body-parser');

const healthCheck = require('./healthCheck/routes');
// const authorization = require('./middleware/authorization');
// const books = require('./book/routes');

function register(app) {
    app.use('/health-check', healthCheck);
    // app.use(authorization);
    app.use(bodyParser.json({limit: '1mb'}));
    // app.use('/books', books);
}

module.exports = {
    register
};
