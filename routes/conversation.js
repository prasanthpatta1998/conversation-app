const express = require("express");
const router = express.Router();
const Conversation = require("../model/conversation");

const generateSummery = (message) => {
  return message.join(" ").substring(0, 100);
};

router.post("/conversation", async (req, res) => {
  const { participants, messages } = req.body;

  const summery = generateSummery(messages);

  const newConversation = new Conversation({
    participants,
    messages,
    summery,
  });

  try {
    const result = await newConversation.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;