const alertService = require("../services/messageService");


// a mensagem recebe o get do banco e é envia para o frontend
const messageAlert = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await alertService.getMessage(id);
    console.log(message)

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { messageAlert };