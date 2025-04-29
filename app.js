const dotenv = require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Finaliza o processo caso haja erro crítico
    });

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/user', express.json(), userRouter)
app.use('/admin', express.json(), adminRouter)

// Exporta o aplicativo
module.exports = app;
