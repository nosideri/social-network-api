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
        db.User.update({_id: req.params.id}).then(function(results){
            res.json(results)
        })
    },
    deleteUser: function(req, res) {
        db.User.deleteOne({_id: req.params.id}).then(function(results){
            res.json(results)
        })
    }

}

module.exports = userController;