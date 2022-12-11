const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    userName: {
        type: String,
        required: [true, 'Please add a username']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    email: {
        type: String,
        required: [true, 'Please add a email']
    },
    mobileNumber: {
        type: Number,
        required: [true, 'Please add a mobile no']
    },
    bio: {
        type: String
    },
    followerId: {
        type: Array,
        required: [true, 'Please add a Follower id']
    },
    profilePic: {
        type: Array,
        required: [true, 'Please add a Profile Picture']
    },
    following: {
        type: Array
    },
    follower: {
        type: Array
    },
    requestSent: {
        type: Array
    },
    requestReceive: {
        type: Array
    },
    isPrivate: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("user", userSchema)