const {Types} = require("mongoose");

const {CError} = require("../errors");
const {applicantService} = require("../services");


module.exports = {
    isDataValid: (validator, dataType = 'body') => (req, res, next) => {
        try {
            const {error, value} = validator.validate(req[dataType]);

            if (error) {
                return next(new CError(error.details[0].message));
            }

            req[dataType] = value;
            next()
        } catch (e) {
            next(e)
        }
    },

    isIdValid: (params) =>(req, res, next) => {
        try {
            const id = req.params[params];


            if (!Types.ObjectId.isValid(id)){
                return next(new CError('Id not valid'))
            }

            next()
        }catch (e) {
            next(e);
        }
    },

    isPresent:(params, type)=> async (req, res, next) => {
        try {
            const id = req.params[params];

            const applicant = await applicantService.findOne({_id: id});

            if (!applicant) {
                return next(new CError(`${type} with ID: ${id} not found`, 404));
            }

            next();
        } catch (e) {
            next(e);
        }
    },
}
