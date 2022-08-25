const {Schema, model} = require('mongoose');

const ApplicantSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    japaneseKnowledge: {
        type: Boolean,
        required: true,
    },
    level: {
        type: String,
        required: true,
    }
})

module.exports = model('applicants', ApplicantSchema)