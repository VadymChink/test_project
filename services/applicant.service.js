const {Applicant} = require("../DB");

module.exports={
    createApplicant:(applicant)=>{
        return Applicant.create(applicant);
    },
    updateApplicant:(params, dataByUpdate, options={new:true})=>{
        return Applicant.findByIdAndUpdate(params, dataByUpdate, options)
    },
    deleteApplicant:(params)=>{
        return Applicant.deleteOne(params);
    },
}