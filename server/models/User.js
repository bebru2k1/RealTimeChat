const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" }
}, { timestamps: true })

module.exports = mongoose.model('users', User)