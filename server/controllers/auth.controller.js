const User = require("../models/user.models");
const Recruiter = require("../models/recruiter.models");
const Applicant = require("../models/applicant.model");
const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");

exports.register = async (req, res, next) => {
	try {
		const userData = req.body;
		const user = new User(userData);
		const savedUser = await user.save();
		userData.id = savedUser.id;
		const userDetails = savedUser.role === "applicant" ? new Applicant(userData) : new Recruiter(userData);
		const savedUserDetails = await userDetails.save();
		const response = {
			account: savedUser.transform(),
			details: savedUserDetails.transform(),
		};
		let duplicateemail = await User.findOne({ email: email });
		let phonenumber = await User.findOne({ mobile: mobile });
		if (duplicateemail || phonenumber) res.json({ error: "please enter unique email or phone number" });

		res.send({ token: token, saveduser: saveduser });
		res.status(httpStatus.CREATED);
		res.send(response);
	} catch (error) {
		return next(error);
	}
};

exports.login = async (req, res, next) => {
	try {
		const user = await User.findAndGenerateToken(req.body);
		const payload = { sub: user.id, role: user.role };
		const token = jwt.sign(payload, "learnaskillwebapp");
		return res.json({ message: "OK", token: token });
	} catch (error) {
		next(error);
	}
};
