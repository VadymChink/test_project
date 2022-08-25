const {applicantsController} = require("../controllers");
const router = require('express').Router();


router.post('/', applicantsController.createApplicant);
router.put('/:applicant_id', applicantsController.updateApplicant);
router.delete('/:applicant_id', applicantsController.deleteApplicant);


module.exports = router;