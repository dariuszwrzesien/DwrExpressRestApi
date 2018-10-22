'use strict';

const config = {
    AUTH_KEY: process.env.AUTH_KEY || 'test',
    DATABASE: {
        HOST: process.env.DB_HOST || 'mongodb://localhost/test',
    },
    PORT: process.env.PORT || 3000
};

module.exports = config;