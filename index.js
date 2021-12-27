require('dotenv').config();

const express = require('express');
const utils = require('./utils');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }); // mongodb://localhost/deliicious
const db = mongoose.connection;
const app = express();
const port = 8080;

db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Database'));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    utils.logPetition(req);
    next();
});

const tablesRouter = require('./routes/tables');
app.use('/api/tables', tablesRouter);

// Get methods
app.get('*', (req, res) => {
    res.send('Path not defined.');
});

app.listen(port, () => console.log("Server Started"));
