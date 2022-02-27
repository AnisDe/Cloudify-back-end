const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')
const gameSchema = require("../models/game");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    emailToken: {
        type: String
    },
    isSubscibed: {
        type: Boolean,
        default: false
    },
    ownedGames: [gameSchema.name]


});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);