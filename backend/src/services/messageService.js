const fs = require('fs')
const path = require("path")
// logica para a mensagem, pegar pelo id e mandar para o alertController a mensagem e a data

async function getMessage(zona) {
  try {

    const alerts = JSON.parse(fs.readFileSync(path.resolve("src", "database", "alertas.json"), 'utf8'));
    

    const result = alerts.filter(al => al.zona == zona);
    return result;

  } catch (error) {
    console.log("Error in getMessage", error);
    throw error;
  }
}
async function getAllMessages() {
  try {

    const alerts = JSON.parse(fs.readFileSync(path.resolve("src", "database", "alertas.json"), 'utf8'));
    

    return alerts;

  } catch (error) {
    console.log("Error in getMessage", error);
    throw error;
  }
}
const postAlert = (alert) => {
  try {
      const lastFile = JSON.parse(fs.readFileSync(path.resolve("src", "database", "alertas.json"), 'utf8'));
      lastFile.push(alert)
      fs.writeFile(path.resolve("src", "database", "alertas.json"), JSON.stringify(lastFile), (e) => {
          console.log("error ", e)
      })
      return true
  }catch(e) {
      console.log(e.message);
  }
}
module.exports = { getMessage, postAlert, getAllMessages };
