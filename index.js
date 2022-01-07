require('dotenv').config();

const express = require('express');
const services = require('./services');
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
    services.logPetition(req);
    next();
});

const auth = require('./routes/auth');

const tablesRouter = require('./routes/api/tables');
const employeesRouter = require('./routes/api/employees');

app.use('/api/tables', auth, tablesRouter);
app.use('/api/employees', employeesRouter);

app.listen(port, () => console.log("Server Started"));
