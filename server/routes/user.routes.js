const express = require("express");
const router = express.Router();

const { verifyaccesstoken } = require("./../helpers/jwt.helpers");

const usersController = require("../../controllers/users.controller");
const validator = require("express-validation");
const { update } = require("../../validations/user.validation");
const { userId } = require("../../validations/common.validation");

router.get("/", verifyaccesstoken, usersController.getAll);
router.get("/:userId", verifyaccesstoken, validator(userId), usersController.getOne);
router.put("/:userId", verifyaccesstoken, validator(userId), validator(update), usersController.putOne);
router.delete("/:userId", verifyaccesstoken, validator(userId), usersController.deleteOne);

module.exports = router;
