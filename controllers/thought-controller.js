const db = require("../models")
const thoughtController = {
    getThoughts: function(req, res) {
        db.Thought.find().then(function(results){
            res.json(results)
        })
    },
    getSingleThought: function(req, res) {
        db.Thought.findOne({_id: req.params.id}).then(function(results){
            res.json(results)
        })
    },
    createThought: function(req, res) {
        db.Thought.create().then(function(results){
            res.json(results)
        })
    },
    updateThought: function(req, res) {
        db.Thought.updateOne({_id: req.params.id}).then(function(results){
            res.json(results)
        })
    },
    deleteThought: function(req, res) {
        db.Thought.deleteOne({_id: req.params.id}).then(function(results){
            res.json(results)
        })
    }
}