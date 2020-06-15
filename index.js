const express = require('express');
const app = express();

const dotenv = require('dotenv').config;
const debug = require('debug')('LiveChatExploration:index.js');
const path = require('path');

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.listen('3000', () => {
    debug('Server running on port 3000');
});