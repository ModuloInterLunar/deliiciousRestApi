const express = require('express');
const logger = require('morgan');
const fs = require('fs');

const indexRouter = require('./routes/index');
const auth = require('./middlewares/auth');

const app = express();

const logFile = 'logs/access.log';
if (!fs.existsSync(logFile)) fs.appendFileSync(logFile, '');

app.use(logger('dev', {
    stream: fs.createWriteStream(logFile, {flags: 'a'})
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tablesRouter = require('./components/tables');
const employeesRouter = require('./components/employees');
const ticketsRouter = require('./components/tickets');
const ingredientsRouter = require('./components/ingredients');
const login = require('./routes/login');

/**
 * Public
 */

app.use('/', indexRouter);
app.use('/login', login);

/**
 * Needs auth
 */

app.use(auth);

app.use('/api/employees', employeesRouter);
app.use('/api/tables', tablesRouter);
app.use('/api/tickets', ticketsRouter);
app.use('/api/ingredients', ingredientsRouter);

module.exports = app;
