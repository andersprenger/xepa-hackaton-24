const { Router } = require('express')
const { messageAlert, postAlert } = require("../controllers/alertController");
const { getAllMessages } = require("../services/messageService")
const alertRouter = Router();
alertRouter.get("/:zona", (req, res) => messageAlert(req, res));
alertRouter.get("/", (req, res) => {
    res.status(200).json(getAllMessages());
})
alertRouter.post("/", (req, res) => postAlert(req, res))


module.exports = alertRouter;