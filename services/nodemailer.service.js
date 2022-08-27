const EmailTemplate = require("email-templates");
const nodemailer = require("nodemailer");
const path = require("path");

const emailTemplate = require("../email-templates");
const {CError} = require("../errors");
const {config} = require("../constants");

module.exports = {
    sendMail: async (userMail = '', emailAction = '', locals = {}) => {
        const templateParser = new EmailTemplate({
            views: {
                root: path.join(process.cwd(), 'email-templates')
            }
        })

        const templateInfo = emailTemplate[emailAction];

        if (!templateInfo) {
            throw CError('Wrong email action', 500)
        }
        locals.frontendURL = 'https://github.com/VadymChink?tab=repositories';
        const html = await templateParser.render(templateInfo.template, locals);

        const transporter = nodemailer.createTransport({
            auth: {
                user: config.NO_REPLY_EMAIL,
                pass: config.NO_REPLY_EMAIL_PASSWORD,
            },
            service: 'gmail'
        })

        return transporter.sendMail({
            from: 'No reply',
            to: userMail,
            subject: templateInfo.subject,
            html
        })
    },
}