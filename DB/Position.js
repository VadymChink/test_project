const {Schema, model} = require('mongoose');

const PositionSchema = new Schema({
    category: {
        type: String,
        require: true,
    },
    level: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    japaneseRequired: {
        type: Boolean,
        required: true,
    }
}, {timestamps: true})

module.exports = model('positions', PositionSchema)


