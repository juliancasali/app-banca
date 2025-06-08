const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./database/db');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const teacherRouter = require('./routes/professorRouter');
const boardRouter = require('./routes/bancaRouter');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cors
app.use(cors());
app.use(cors({origin: "http://localhost:5000" }));

// conectar ao banco de dados
connectDB().then(() => console.log("Database connected successfully "));

// Rotas
app.use('/api/auth', userRouter)
app.use('/admin', adminRouter)
app.use('/professores', teacherRouter)
app.use('/bancas', boardRouter)

// Exporta o aplicativo
module.exports = app;
