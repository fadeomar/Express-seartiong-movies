const express = require('express');

const path = require('path');

const app = express();

const router = require('./controllers')

app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router)

module.exports = app;
