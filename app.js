'use strict';

const express = require('express');
const mongoose = require('mongoose');

const routing = require('./src/routing');
const config = require('./src/config');

const app = express();

routing.register(app);
mongoose.connect(config.DATABASE.HOST, { useNewUrlParser: true });

app.listen(config.PORT);
console.info('Server is listening on port: ' + config.PORT);
