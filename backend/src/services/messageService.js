//db connetion
const db = require("../database/postgre.js");
// logica para a mensagem, pegar pelo id e mandar para o alertController a mensagem e a data

async function getMessage(id) {
  try {
    const result = await db.query("SELECT * FROM messages WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return null;
    }
    const message = result.rows[0];
    return {
      content: message.content,
      createdAt: message.created_at,
    };
  } catch (error) {
    console.log("Error in getMessage", error);
    throw error;
  }
}

module.exports = { getMessage };