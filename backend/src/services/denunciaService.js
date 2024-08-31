const fs = require('fs');
const path = require("path");

const postDenuncia = (denuncia) => {
    const lastFile = JSON.parse(fs.readFileSync(path.resolve("src", "database", "alertas.json"), 'utf8'));
    lastFile.push(denuncia)
    fs.writeFile(path.resolve("src", "database", "alertas.json"), lastFile)
    return true
}
const getDenuncia = () => {
    const lastFile = JSON.parse(fs.readFileSync(path.resolve("src", "database", "denuncias.json"), 'utf8'));
    return lastFile;
}
module.exports = {postDenuncia, getDenuncia};