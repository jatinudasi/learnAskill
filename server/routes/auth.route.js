const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
// const auth = require('../../middlewares/authorization')

router.post('/signup/recruiter', authController.recruitersignup) // validate and register //done
router.post('/signin/recruiter', authController.recruitersignin) // login //done
router.post('/signup/applicant', authController.applicantsignup)//done
router.post('/signin/applicant', authController.applicantsignin)


module.exports = router
