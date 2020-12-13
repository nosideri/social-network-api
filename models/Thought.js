const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reactionSchema = require("./Reaction");
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'Username is required'
    },
    reactions: [
        //array of nested documents created with the reactionSchema
        reactionSchema
    ]
    
}, 
    {
        toJSON: {
        virtuals: true,
        getters: true
        }
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
});

const Thought = mongoose.model("Thought", ThoughtSchema);
module.exports = Thought

//Schema Settings
//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.