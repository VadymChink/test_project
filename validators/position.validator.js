const joi = require('joi');

const validator = require('./common.validator');

module.exports = {
    PositionToAdd: joi.object({
        category: validator.category.required(),
        level: validator.level.required(),
        company: validator.company.required(),
        description: validator.description,
        japaneseRequired: validator.japaneseRequired.required()
    }),
    PositionToPatch: joi.object({
        description: validator.description,
        japaneseRequired: validator.japaneseRequired,
    })
}