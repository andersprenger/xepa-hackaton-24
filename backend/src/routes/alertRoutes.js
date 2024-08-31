const { Router } = require('express')
const { messageAlert, postAlert } = require("../controllers/alertController");
const alertRouter = Router();
alertRouter.get("/", (req, res) => messageAlert(req, res));
alertRouter.post("/", (req, res) => postAlert(req, res))


module.exports = alertRouter;