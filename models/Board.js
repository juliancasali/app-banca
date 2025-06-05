const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    student: {
        type: String,
        required: true
    },

    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["agendada", "concluida"],
        default: "agendada"
    },

    course: {
        type: String
    },

    tags: {
        type: [String],
        default: []
    },
},
    {timestamps: true}
);

module.exports = mongoose.model('Board', boardSchema);
