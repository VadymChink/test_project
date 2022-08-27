const router = require('express').Router();

const {applicantsController} = require("../controllers");
const {commonMdlwr, applicantMdlwr} = require("../middlewares");
const {applicantValidator} = require("../validators");


router.post('/',
    commonMdlwr.isDataValid(applicantValidator.Application),
    applicantMdlwr.isApplicantUniq,
    applicantsController.createApplicant
);

router.put('/:applicant_id',
    commonMdlwr.isIdValid('applicant_id'),
    commonMdlwr.isDataValid(applicantValidator.Application),
    commonMdlwr.isPresent('applicant_id'),
    applicantsController.updateApplicant
);

router.delete('/:applicant_id',
    commonMdlwr.isIdValid('applicant_id'),
    commonMdlwr.isPresent('applicant_id'),
    applicantsController.deleteApplicant
);


module.exports = router;