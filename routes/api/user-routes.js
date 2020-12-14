const router = require('express').Router();
const { model } = require('mongoose');
const userController = require("../../controllers/user-controller");

// /api/users
router.route("/")
      .get(userController.getUsers)
      .post(userController.createUser)

// /api/users/:id
router.route("/:id")
      .get(userController.getOneUser)
      .put(userController.updateUser)
      .delete(userController.deleteUser)

// /api/users/:userId/friends/:friendId


module.exports = router;