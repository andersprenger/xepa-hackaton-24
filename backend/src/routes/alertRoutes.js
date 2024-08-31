const { Router } = require("express");
const { messageAlert } = require("../controllers/alertController");
const alertRouter = Router();
alertRouter.get("/", (req, res) => messageAlert(req, res));


















module.exports = alertRouter;