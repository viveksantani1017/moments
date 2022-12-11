const asyncHandler = require("express-async-handler")

//@desc userLogin
//@route /moments/user/login
// @access Private
const userLogin = asyncHandler(async(req, res) => {
    console.log(req.body.text)
    res.status(200).json({ messege: "From Login" })
})

//@desc userRegister
//@route /moments/user/
// @access Private
const userRegister = asyncHandler(async(req, res) => {
    res.status(200).json({ messege: "From Register" })
})

module.exports = { userLogin, userRegister }