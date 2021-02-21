const express = require("express");
const app = express.Router();

const authroutes = require("./auth.route");


// app.use("/applicant", authroutes);
// app.use('/recruiter', authroutes);
app.use('/auth',authroutes);





module.exports = app;
