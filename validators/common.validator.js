const joi = require('joi');
const {constants} = require("../constants");

module.exports = {
    email: joi.string().regex(constants.EMAIL_REGEX).trim().lowercase(),
    categories: joi.array().items(joi.string().valid('nodejs', 'angular', 'javascript', 'react')),
    japaneseKnowledge: joi.boolean(),
    level: joi.string().valid('junior', 'middle', 'senior'),
    japaneseRequired: joi.boolean(),
    description: joi.string(),
    category: joi.string().valid('nodejs', 'angular', 'javascript', 'react'),
    company: joi.string(),

}