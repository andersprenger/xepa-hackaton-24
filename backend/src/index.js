const app = require("./app.js")
const alertRoutes = require("./routes/alertRoutes")
app.get("/helthcheck", (_req, res) => res.send("OK"));
app.use("/alerts", alertRoutes);


app.listen(3001, () => { console.log("listening on port 3000")})