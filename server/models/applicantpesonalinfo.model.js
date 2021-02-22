const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Applicant = require('./applicant.model');
const education = require("./education.model");

const applicantpersonalschema = new Schema({
	applicantid: {
		type: Schema.Types.ObjectId,
		ref: "Applicant",
	},
	first: {
		type: String,
		required: true,
	},
	last: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	education: {
		type: [education],
	},
	skills: {
		type: [String],
	},
	headline: {
		type: String,
	},
	summary: {
		type: String,
	},
	resume: {
		type: String,
	},
});

module.exports = mongoose.model("Applicantpersonal", applicantpersonalschema);
