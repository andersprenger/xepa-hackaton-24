const { getDenuncia, postDenuncia } = require("../services/denunciaService")
const getDenuncias = (req, res) => {
    const response = getDenuncia();
    res.status(200).json(response);

}
const postDenunciaController = (req, res) => {
    const { description, local, title } = req.body;
    console.log( description, local, title);
    postDenuncia({
        description,
        local,
        title
    })
    return res.status(201).send();
}

module.exports = { getDenuncias, postDenunciaController };