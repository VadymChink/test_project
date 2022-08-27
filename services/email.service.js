const {findAll} = require("./applicant.service");
const {emailActions} = require("../constants");
const {sendMail} = require('./nodemailer.service');

module.exports = {
    sendMailWhenCreateAndRemovePosition: async (newPosition, emailAction) => {
        const {category, level, company, description, japaneseRequired} = newPosition;

        let allApplicants = [];

        if (japaneseRequired === false) {
            allApplicants = await findAll({
                $and: [
                    {categories: category},
                    {level},
                    {japaneseKnowledge: [false, true]}
                ]
            })
        }
        if (japaneseRequired === true) {
            allApplicants = await findAll({
                $and: [
                    {categories: category},
                    {level},
                    {japaneseKnowledge: true}
                ]
            })
        }

        for (let i = 0; i < allApplicants.length; i++) {
            await sendMail(
                allApplicants[i].email,
                emailActions[emailAction],
                {category, level, company, description, japaneseRequired}
            );
            console.log(allApplicants[i].email);
        }
    }
}