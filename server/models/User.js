const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "https://tinviet365.net/wp-content/uploads/2020/04/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-anime-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-th%E1%BA%BF-gi%E1%BB%9Bi-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng.jpg" }
}, { timestamps: true })

module.exports = mongoose.model('users', User)