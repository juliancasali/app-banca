const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 100
    },

    departamento: {
        type: String,
        required: true,
    },

    titulacao: {
        type: String,
        required: true,
    },

    especialidades: {
        type: [String],
        required: true,
        default: [],
    },

    ativo: {
        type: Boolean,
        default: true,
    }
},
    { timestamps: true}
)

module.exports = mongoose.model('Professor', professorSchema);