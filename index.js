const express = require('express');
const app = express();

require('dotenv').config();
const debug = require('debug')('LiveChatExploration:index.js');
const path = require('path');

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

port = process.env.PORT;
console.log("This is the active port: ", port);

app.listen(`${port}`, () => {
    debug('Server running on port 3000');
    console.log(`Server running on port: ${port}`);
});