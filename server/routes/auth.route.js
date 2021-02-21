const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const validator = require('express-validation')
const { login, create, update } = require('../validations/user.validation')
// const auth = require('../../middlewares/authorization')

router.post('/login', authController.login) // login
router.post('/signup', authController.register) // validate and register

module.exports = router
