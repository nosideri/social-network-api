const router = require('express').Router();
const { model } = require('mongoose');
const userController = require("../../controllers/user-controller");
router.route("/")
.get(userController.getUsers)
.post(userController.createUser)
.put(userController.updateUser)
.delete(userController.deleteUser)

router.route("/:id")
      .get(userController.getOneUser)

module.exports = router;

