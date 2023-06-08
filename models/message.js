"use strict";
const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  fromName: { type: String, required: true },
  fromEmail: { type: String, required: true },
  message: { type: String, required: true },
});
const Message= mongoose.model("message", messageSchema);
module.exports = Message;