const joi = require('joi');
const {constants} = require("../constants");

module.exports = {
    email: joi.string().regex(constants.EMAIL_REGEX).trim().lowercase(),
    categories: joi.array().items(joi.string()),
    japaneseKnowledge: joi.boolean(),
    level: joi.string(),
    japaneseRequired: joi.boolean(),
    description: joi.string(),
    category: joi.string(),
    company: joi.string(),

}