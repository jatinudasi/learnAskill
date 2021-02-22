const express = require('express')
const router = express.Router()
const { verifyaccesstoken } = require("./../helpers/jwt.helpers");
const jobsController = require('../controllers/jobs.controller')
//const applicationController = require('../../controllers/application.controller')

//router.get('/applied', verifyaccesstoken, applicationController.fetchApplied)
router.get('/', verifyaccesstoken, jobsController.get)
router.get('/:city', verifyaccesstoken, jobsController.getbyCity)
router.post('/', verifyaccesstoken, jobsController.post)
//router.get('/findByRecruiter', verifyaccesstoken, jobsController.jobsByRecruiter)
//router.get('/:jobId', verifyaccesstoken, jobsController.getOne)
/* router.get('/:jobId/details', verifyaccesstoken, applicationController.getApplicationDetails)
router.put('/:jobId', verifyaccesstoken, jobsController.putOne)
router.delete('/:jobId', verifyaccesstoken, jobsController.deleteOne)
//router.post('/:jobId/save', verifyaccesstoken, applicationController.save)
//router.post('/:jobId/unsave', verifyaccesstoken, applicationController.unsave)
router.post('/:jobId/apply', verifyaccesstoken, applicationController.apply)
 */
module.exports = router
