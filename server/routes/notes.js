const express = require("express")
const User = require("../models/notes")
const router = express.Router()

router
    .get('/getAllNotes', async (req, res) => {
        try {
            const notes = await User.getAllNotes()
            res.send(notes)
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })

module.exports = router