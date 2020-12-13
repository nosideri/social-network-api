const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: ['Username is required'],
        trim: true
    },
    email: {
        type: String,
        required: ['Email is required'],
        unique: true,
        match: [/.+\@.+\..+/]
    },
    thoughts: [{
        //array of _id values referencing Thought model
        type: mongoose.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [{
        //array of _id values referencing the User model
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
}, 
    {
        toJSON: {
        virtuals: true,
        getters: true
    }
})

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

const User = mongoose.model("User", UserSchema)
module.exports = User
// Schema Settings
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query