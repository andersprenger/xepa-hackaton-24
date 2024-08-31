const app = require("./app.js")
app.get("/helthcheck", (_req, res) => res.send("OK"));

app.listen(3000, () => { console.log("listening on port 3000")})