const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config(); // load .env variables into process.env
const {moongoseConect} = require('./db');
moongoseConect(); // connect to mongodb
console.log(process.env.ATLAS_URI); // test that it worked


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');
const authorRouter = require('./routes/authors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogsRouter);
app.use('/author', authorRouter);

module.exports = app;
