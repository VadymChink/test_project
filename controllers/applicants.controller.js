const {applicantService, nodemailerService} = require("../services");
const {emailActions} = require("../constants");

module.exports = {
    createApplicant: async (req, res, next) => {
        try {
            const {email} = req.body;
            const newApplicator = await applicantService.createApplicant(req.body);
            await nodemailerService.sendMail(email, emailActions.WELCOME);

            res.status(201).json(newApplicator);
        } catch (e) {
            next(e);
        }
    },
    updateApplicant: async (req, res, next) => {
        try {
            const {applicant_id} = req.params;

            const updatedApplicant = await applicantService.updateApplicant({_id: applicant_id}, req.body);

            res.json(updatedApplicant);
        } catch (e) {
            next(e);
        }
    },
    deleteApplicant: async (req, res, next) => {
        try {
            const {applicant_id} = req.params;

            await applicantService.deleteApplicant({_id: applicant_id})

            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },
}