'use strict';

const config = {
    AUTH_KEY: process.env.AUTH_KEY || '1234567890123456789012345678901234567890',
    DATABASE: {
        HOST: process.env.DB_HOST || 'mongodb://localhost/test',
    },
    PORT: process.env.PORT || 3000
};

module.exports = config;