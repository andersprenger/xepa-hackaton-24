const fs = require("fs");
const path = require("path");

async function getMessage(id) {
  try {
    const result = JSON.parse(
      fs.readFileSync(path.resolve("src", "database", "alertas.json"), "utf-8")
    );
    console.log(result);
  } catch (error) {
    console.log("Error in getMessage", error);
    throw error;
  }
}

module.exports = { getMessage };
