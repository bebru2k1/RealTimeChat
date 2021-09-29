const express = require('express')
const route = express.Router()
const argon2 = require('argon2')
const db = require('../models')
const User = db.User
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middleware/verifyToken')
const Conversation = require('../models/Conversation')

// @public
// /v1/api/conversation/
// Get User
route.get('/', verifyToken, async (req, res) => {
    const userId = req.userId
    const populateMembers = {
        path: 'members',
        select: '-password'
    }
    const populateMessages = {
        path: 'messages',
        populate: {
            path: 'sender',
            select: '-password'
        }
    }
    // find conversation include req.userId
    const conversation = await Conversation.find({ members: { $all: req.userId } }).populate([populateMembers, populateMessages]).sort({ 'messages.time': 1 })

    if (!conversation) return res.status(400).json({
        success: false,
        message: 'No find conversation'
    })

    res.status(200).json({
        success: true,
        message: 'Find conversation success',
        conversation
    })
})

// @privte
// /v1/api/conversation/
// Create Conversation
route.post('/', verifyToken, async (req, res) => {
    try {
        const { members } = req.body
        const conversation = await Conversation.findOne({ members: { $size: 2, $all: members } })
        // console.log(conversation)
        if (conversation) {
            return res.status(400).json({
                success: false,
                message: 'Error: Conversation is exits'
            })
        }
        const messages = [{
            sender: members[0],
            message: `${members[0]} đã tạo nhóm`
        }]

        const newConversation = new Conversation({ members, messages })

        await newConversation.save()

        console.log('Create Conversation Success')

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @privte
// /v1/api/conversation/
// Update Message
route.put('/', verifyToken, async (req, res) => {
    try {
        // const { idConver, message } = req.body
        // await Conversation.findByIdAndUpdate(idConver)
    } catch (error) {

    }
})



module.exports = route