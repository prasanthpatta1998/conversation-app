const express = require('express');
const router = express.Router();
const Conversation = require('../model/conversation');


router.get('/admin/conversations', async (req, res) => {
    try {
        const conversations = await Conversation.find();
        res.status(200).json(conversations);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;