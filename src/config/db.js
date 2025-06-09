const mongoose = require('mongoose');
require('dotenv').config()

// Conexão com MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_URL)
        console.log('MongoDB Connected')
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Finaliza o processo caso haja erro crítico
    }
}

// Eventos para monitorar conexão
mongoose.connection.on('connected', () => console.log('MongoDB Connected'));
mongoose.connection.on('disconnected', () => console.warn('MongoDB disconnected'));

module.exports = connectDB;