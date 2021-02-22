const mongoose = require("mongoose");
const Job = require("../models/job.model");
const Applicant = require("../models/applicant.model");
const Application = require("../models/application.model");

exports.Apply = async (req, res, next) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.jobId)) throw new APIError(`Invalid jobId`, httpStatus.BAD_REQUEST);
        
	}
};
