const {CError} = require("../errors");
const {applicantService} = require("../services");

module.exports = {
    isApplicantUniq:async (req, res, next) => {
        try {
            const {email} = req.body;

            const applicant = await applicantService.findOne({email});

            if (applicant){
                return next(new CError(`User with email ${email} is exist`, 409));
            }

            next();
        }catch (e) {
            next(e);
        }
    },
}