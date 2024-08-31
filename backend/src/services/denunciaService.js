const fs = require('fs');
const path = require("path");

const postDenuncia = (denuncia) => {
    try {
        const lastFile = JSON.parse(fs.readFileSync(path.resolve("src", "database", "denuncias.json"), 'utf8'));
        lastFile.push(denuncia)
        console.log("lastfile ", lastFile);
        console.log("denuncia ", denuncia)
        fs.writeFile(path.resolve("src", "database", "denuncias.json"), JSON.stringify(lastFile), (e) => {
            console.log("error ", e)
        })
        return true
    }catch(e) {
        console.log(e.message);
    }
}
const getDenuncia = () => {
    const lastFile = JSON.parse(fs.readFileSync(path.resolve("src", "database", "denuncias.json"), 'utf8'));
    return lastFile;
}
module.exports = {postDenuncia, getDenuncia};