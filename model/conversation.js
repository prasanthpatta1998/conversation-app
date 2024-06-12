const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  participants: [String],
  messages: [String],
  summary: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Conversation", ConversationSchema);
