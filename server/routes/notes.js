const express = require("express")
const User = require("../models/notes")
const router = express.Router()

router
    .get('/GetAllNotes', async (req, res) => {
        try {
            const notes = await User.getAllNotes()
            res.send(notes)
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })

    .post('/AddNotes', async (req, res) => {
        try {
            const usernotes = await User.addnotes(req.body)
            res.send(usernotes)
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })

module.exports = router