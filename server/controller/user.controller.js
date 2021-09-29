const express = require('express')
const route = express.Router()
const argon2 = require('argon2')
const db = require('../models')
const User = db.User
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middleware/verifyToken')
// @public
// /v1/api/user/
// Get User
route.get('/:email', verifyToken, async (req, res) => {
    const { email } = req.params
    if (!email) return res.status(400).json({
        success: false,
        message: "Missing Data"
    })

    const user = await User.findOne({ email }).select('-password')

    console.log(user)
    if (!user) return res.status(400).json({
        success: false, message: "Not find user by email"
    })

    //Check user diffrent userget
    if (!user._id.equals(req.userId)) {
        res.status(200).json({
            success: true,
            message: "Get user success",
            user
        })
    }

})

// @public
// /v1/api/user/signup
// Sigup User
route.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).json({
                message: 'password and email requied'
            })
        }
        const decodePassword = await argon2.hash(password)

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                success: false,
                message: 'Email is exits. Please Change Email'
            })
        }
        newUser = new User({
            email,
            password: decodePassword
        })
        console.log(newUser)
        await newUser.save()
        return res.status(200).json({
            success: true,
            message: "Register Success"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @public
// /v1/api/user/signin
// Sigin User
route.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(401).json({
            message: 'password and email requied'
        })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Email isnot register'
            })
        }
        const verifyPassword = await argon2.verify(user.password, password)
        if (verifyPassword) {
            const userObject = user.toObject()
            delete userObject.password
            const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            return res.status(200).json({
                success: true,
                message: 'Signin Success',
                accessToken,
                userObject
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})







module.exports = route