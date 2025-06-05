const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
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

    department: {
        type: String,
        required: true,
    },

    academicDegree: {
        type: String,
        required: true,
    },

    academicSpecializations: {
        type: [String],
        required: true,
        default: [],
    },

    active: {
        type: Boolean,
        default: true,
    }
},
    { timestamps: true}
)

module.exports = mongoose.model('Teacher', teacherSchema);