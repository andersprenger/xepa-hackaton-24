const app = require("./app.js")
const alertRoutes = require("./routes/alertRoutes")
const denunciaRoutes = require('./routes/denunciaRoutes.js')

app.get("/helthcheck", (_req, res) => res.send("OK"));
app.use("/alerts", alertRoutes);
app.use("/denuncias", denunciaRoutes)


app.listen(3000, () => { console.log("listening on port 3000")})