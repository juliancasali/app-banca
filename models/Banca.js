const mongoose = require('mongoose');

const bancaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },

    aluno: {
        type: String,
        required: true
    },

    orientador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor',
        required: true
    },

    data: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["agendada", "concluida"],
        default: "agendada"
    },

    curso: {
        type: String
    },

    tags: {
        type: [String],
        default: []
    },
},
    {timestamps: true}
);

module.exports = mongoose.model('Board', bancaSchema);
