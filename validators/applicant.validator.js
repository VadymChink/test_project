const joi = require("joi");

const validator = require('./common.validator');

module.exports = {
    Application : joi.object({
        email: validator.email.required(),
        categories: validator.categories.required(),
        japaneseKnowledge: validator.japaneseKnowledge.required(),
        level: validator.level.required(),
    }),
}