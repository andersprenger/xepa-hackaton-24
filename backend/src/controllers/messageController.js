const express = require("express");
const router = express.Router();
const { getMessage } = require("../services/messageService.js");

async function createMessage(req,res) {
    try {
        const { content } = req.body;
        const result = await db.query("INSERT INTO messages (content, created_at) VALUES ($1, NOW()) RETURNING *", [content]);
        res.status(201).send(result.rows[0]);
    } catch (error) {
        console.log("Error in createMessage", error);
        res.status(500).send("Error to create message");
    }
}

async function getMessageById(req,res) {
    try {
        const { id } = req.params;
        const message = await getMessage(id);
        if (!message) {
            return res.status(404).send("Message not found");
        }
        res.send(message);
    } catch (error) {
        console.log("Error in getMessageById", error);
        res.status(500).send("Error to get message");
    }
}

async function updateMessage(req, res) {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const result = await db.query(
            'UPDATE messages SET content = $1 WHERE id = $2 RETURNING *',
            [content, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Mensagem não encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar a mensagem:', error);
        res.status(500).json({ error: 'Erro ao atualizar a mensagem' });
    }
}

async function deleteMessage(req, res) {
    try {
        const { id } = req.params;
        const result = await db.query('DELETE FROM messages WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Mensagem não encontrada' });
        }

        res.json({ message: 'Mensagem deletada com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar a mensagem:', error);
        res.status(500).json({ error: 'Erro ao deletar a mensagem' });
    }
}

router.post("/messages", createMessage);
router.get("/messages/:id", getMessageById);
router.put("/messages/:id", updateMessage);
router.delete("/messages/:id", deleteMessage);

module.exports = router;