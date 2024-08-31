const app = require("./app.js")
const fs = require('fs');
const path = require("path");

const alertRoutes = require("./routes/alertRoutes")
const denunciaRoutes = require('./routes/denunciaRoutes.js')

const PORT = 3002
app.get("/helthcheck", (_req, res) => res.send("OK"));
app.use("/alerts", alertRoutes);
app.use("/denuncias", denunciaRoutes)
app.post("/checkin/:zona",(req, res) => {
    const { zona } = req.params;
    const lastFile = JSON.parse(fs.readFileSync(path.resolve("src", "database", "zonas.json"), 'utf8'));
    lastFile[zona].abrigados += 1;
    fs.writeFile(path.resolve("src", "database", "zonas.json"), JSON.stringify(lastFile), (e) => {
        console.log("error ", e)
    });
    res.status(201).send();
});

app.listen(PORT, () => { console.log("listening on port ", PORT)})