const mongoose = require("mongoose");
const Job = require("../models/job.model");

exports.post = async (req, res, next) => {
	try {
		//console.log("---------------------------------------------------------------");
		//console.log(req.body);
		//console.log("---------------------------------------------------------------");
		//console.log(req.payload.id);
		req.body.recruiter = req.payload.id;
		const job = new Job(req.body);
		const createnewjob = await job.save();

		res.status(200).send(job);
	} catch (err) {
		next(err);
	}
};

exports.get = async (req, res, next) => {
	try {
		const jobs = await Job.find();
		res.status(200).send(jobs);
	} catch (err) {
		next(err);
	}
};

exports.getbyCity = async (req, res, next) => {
	try {
		console.log(req.params.city);

		const jobs = await Job.find({ city: req.params.city });

		res.status(200).send(jobs);
	} catch (err) {
		next(err);
	}
};
