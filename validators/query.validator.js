const joi = require('joi');

const validator = require('./common.validator');

module.exports = {
    findAll: joi.object({
        category: validator.category,
        level: validator.level,
        tag: joi.string(),
    }),
}