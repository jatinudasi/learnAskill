const express = require("express");
const app = express.Router();

const userroutes = require("./user.routes");
const authRouter = require('./auth.route')


app.use("/user", userroutes);
app.use('/auth', authRouter)


module.exports = app;
