const express = require("express");
const app = express.Router();

const authroutes = require("./auth.route");
const jobroutes = require("./job.route");


// app.use("/applicant", authroutes);
// app.use('/recruiter', authroutes);
app.use('/auth',authroutes);
app.use('/job', jobroutes);





module.exports = app;
