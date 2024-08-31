const { Router } = require("express");
const { getDenuncias, postDenunciaController } = require("../controllers/denunciaController")
const denunciaRouter = Router();
denunciaRouter.get('/',(req,  res) => getDenuncias(req, res));
denunciaRouter.post('/', (req, res) => postDenunciaController(req, res));

module.exports = denunciaRouter;