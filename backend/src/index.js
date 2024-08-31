const app = require("./app.js")
const { createDatabase } = require("./database/postgre.js");
createDatabase();
app.get("/helthcheck", (_req, res) => res.send("OK"));

app.listen(3000, () => { console.log("listening on port 3000")});