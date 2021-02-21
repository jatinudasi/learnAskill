const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
// const auth = require('../../middlewares/authorization')

router.post('/login/recruiter', authController.recruitersignup) // login
// router.post('/login/applicant', authController.)
// router.post('/signup/recruiter', authController.signup) // validate and register
// router.post('/signup/applicant', authController.signup)

module.exports = router
