const express = require('express');
const utils = require('./utils');
const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((request, _response, next) => {
    const path = request.path;
    console.log(path);
    utils.logPetition(request.path);
    next();
});

// Get methods
app.get('*', (_request, response) => {
    response.send('Path not defined.');
});

app.listen(port, () => {
    console.log("Server Started");
});