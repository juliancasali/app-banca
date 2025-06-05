const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./database/db');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const teacherRouter = require('./routes/teacherRouter');
const boardRouter = require('./routes/boardRouter');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


// conectar ao banco de dados
connectDB().then(() => console.log("Database connected successfully "));

// Rotas
app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/professores', teacherRouter)
app.use('/bancas', boardRouter)

// Exporta o aplicativo
module.exports = app;
