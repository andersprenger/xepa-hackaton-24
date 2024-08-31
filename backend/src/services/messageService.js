const fs = require('fs')
const path = require("path")
// logica para a mensagem, pegar pelo id e mandar para o alertController a mensagem e a data

async function getMessage(id) {
  try {

    const result = JSON.parse(fs.readFileSync(path.resolve("src", "database", "alertas.json"), 'utf8'));
    console.log(result)

    
    return result;
  } catch (error) {
    console.log("Error in getMessage", error);
    throw error;
  }
}

module.exports = { getMessage };