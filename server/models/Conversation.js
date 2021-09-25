const mongoose = require('mongoose');

const { Schema } = mongoose;

const Conversation = new Schema({
    members: [{ type: Schema.Types.ObjectId, required: true, ref="users" }],
    messages: [
        {
            sender: { type: Schema.Types.ObjectId, ref="users" },
            message: String,
            time: Date.now()
        }
    ]

}, {
    timestamps: true
})

module.exports = mongoose.model('conversations', Conversation)