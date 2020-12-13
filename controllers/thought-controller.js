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
    
}