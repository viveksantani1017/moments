const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const bycry = require("bcryptjs");
const { exists } = require("../model/userModel");

//@desc userLogin
//@route /moments/user/login
// @access Private
const userLogin = asyncHandler(async(req, res) => {
    const { data, password, type } = req.body;
    let toCheck
    if (!data || !password || !type) {
        return res.status(201).json({ success: false, messege: "Fill The Data Properly" });
    }
    if (type == "email") {
        toCheck = "email";
    } else if (type == "mobileno") {
        toCheck = "mobileNumber";
    } else {
        toCheck = "userName";
    }
    const userData = await User.findOne({
        [toCheck]: data
    })
    if (userData && (await bycry.compare(password, userData.password))) {
        res.json({ success: true, messege: 'Logged In' })
    } else {
        res.json({ success: false, messege: 'Incorrect Username or Password' })
    }
});

//@desc userRegister
//@route /moments/user/
// @access Private
const userRegister = asyncHandler(async(req, res) => {
    const { info, fullName, userName, password, type } = req.body.user;
    let toInsert
    if (!info || !fullName || !userName || !password || !type) {
        return res.status(201).json({ success: false, messege: "Fill The Data Properly" });
    }
    if (type == "email") {
        if (await User.exists({ email: info })) {
            return res.status(201).json({ success: false, messege: "Email Already Exsists" });
        } else {
            toInsert = "email";
        }
    } else if (type == "mobileno") {
        if (await User.exists({ mobileNumber: info }))
            return res.status(201).json({ success: false, messege: "Mobile Number Already Exsists" });
        else {
            toInsert = "mobileNumber";
        }
    }
    const salt = await bycry.genSalt(10)
    const hashpassword = await bycry.hash(password, salt)
    const userData = await User.create({
        name: fullName,
        userName: userName,
        password: hashpassword,
        [toInsert]: info,
    })
    if (userData)
        return res.status(200).json({ success: true })
    else
        return res.status(200).json({ success: false, messege: "Something Went Wrong" })
});

module.exports = { userLogin, userRegister };