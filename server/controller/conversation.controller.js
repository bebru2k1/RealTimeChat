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
route.get('/', (req, res) => {
    res.send('ahihi')
})

// @privte
// /v1/api/conversation/
// Create Conversation
route.post('/', verifyToken, async (req, res) => {
    
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})



module.exports = route