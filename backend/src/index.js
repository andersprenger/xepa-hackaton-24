const app = require("./app.js")
const alertRoutes = require("./routes/alertRoutes")
const denunciaRoutes = require('./routes/denunciaRoutes.js')

const PORT = 3002
app.get("/helthcheck", (_req, res) => res.send("OK"));
app.use("/alerts", alertRoutes);
app.use("/denuncias", denunciaRoutes)


app.listen(PORT, () => { console.log("listening on port ", PORT)})