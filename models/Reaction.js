const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema( {
    reactionId: {
        //mongooses objectid date type
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'This is required',
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Username is required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
}
)

module.exports = reactionSchema;