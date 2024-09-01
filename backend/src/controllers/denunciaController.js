const { getDenuncia, postDenuncia } = require("../services/denunciaService")
const getDenuncias = (req, res) => {
    const response = getDenuncia();
    res.status(200).json(response);

}
const postDenunciaController = (req, res) => {
    const { group, zone } = req.body;
    console.log("teste", group, zone);
    postDenuncia({
        zone,
        group,
    });
    return res.status(201).send();
}

module.exports = { getDenuncias, postDenunciaController };