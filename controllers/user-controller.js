const db = require("../models")
const userController = {
    getUsers: function(req, res) {
        db.User.find().then(function(results){
            res.json(results)
        })
    },
    getOneUser: function(req, res) {
        db.User.findOne({_id: req.params.id}).then(function(results){
            res.json(results)
        })
    },
    createUser: function(req, res) {
        db.User.create(req.body).then(function(results){
            res.json(results)
        })
    },
    updateUser: function(req, res) {
        db.User.updateOne({_id: req.params.id}).then(function(results){
            if (!results) {
                res.status(404).json({message: "This user cannot be found"})
            }
            res.json(results)
        })
    },
    deleteUser: function(req, res) {
        db.User.deleteOne({_id: req.params.id}).then(function(results){
            res.json(results)
        })
    },
    addFriend: function(req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { friends: req.params.friendId } }, { new: true }).then(function(results){
            if (!results) {
                res.status(404).json({message: `No user found with the id of ${req.params.id}`});
            }
            res.json(results)
        })
    },
    deleteFriend: function(req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { new: true }).then(function(results){
            if (!results) {
                res.status(404).json({message: `No user found with the id of ${req.params.id}`});
            }
            res.json(results)
        })
    }

}

module.exports = userController;