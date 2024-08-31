const { Request, Response } = require("express");
const alertService = require("../services/messageService");


// a mensagem recebe o get do banco e é envia para o frontend
const messageAlert = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await alertService.getMessage(id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({
      content: message.content,
      date: message.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { messageAlert };