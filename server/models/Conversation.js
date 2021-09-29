const mongoose = require('mongoose');

const { Schema } = mongoose;

const Conversation = new Schema({
    members: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    messages: [
        {
            sender: { type: Schema.Types.ObjectId, ref: 'users' },
            message: { type: String },
            time: { type: Date, default: new Date() }
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('conversations', Conversation)