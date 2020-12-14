const router = require('express').Router();
const { model } = require('mongoose');r
const {thoughtController} = require("../../controllers/thought-controller");

// /api/thoughts
 router.route("/")
    .get(thoughtController.getThoughts)
    .post(thoughtController.createThought)

// /api/thoughts/:id
router.route("/:id")
    .get(thoughtController.getSingleThought)
    .put(thoughtController.updateThought)

// /api/thoughts/:id/users/:userId
router.route("/:id/users/:userId")
    .delete(thoughtController.deleteThought)

// /api/thoughts/:id/reactions
router.route('/:id/reactions')
    .post(addReaction)

// /api/thoughts/:id/reactions/<reactionId>
router.route("/:id/reactions/:reactionId")
    .put(updateReaction)
    .delete(deleteReaction)


module.exports = router;

