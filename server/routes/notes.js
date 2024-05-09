const express = require("express")
const UserNotes = require("../models/notes")
const router = express.Router()

router
    .get('/GetAllNotes', async (req, res) => {
        try {
            const notes = await UserNotes.getAllNotes()
            res.send(notes)
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })

    .get('/GetUserNotes', async (req, res) => {
        try {
            const notes = await UserNotes.getSpecificUserNotes(req.query)
            if (notes.length != 0)
                res.send(notes)
            else {
                res.send({ Success: `The user doesn't exist or There are no notes for this User!!` })
            }
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })

    .post('/AddNotes', async (req, res) => {
        try {
            const usernotes = await UserNotes.addnotes(req.body)
            res.send(usernotes)
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })

// .delete('/DeleteAllNotes', async (req, res) => {
//     try {
//         const usernotes = await UserNotes.addnotes(req.body)
//         res.send(usernotes)
//     } catch (err) {
//         res.status(401).send({ message: err.message })
//     })
// .delete('/DeleteSpecificNote', async (req, res) => {
//     try {
//         const usernotes = await UserNotes.addnotes(req.body)
//         res.send(usernotes)
//     } catch (err) {
//         res.status(401).send({ message: err.message })
//     })

module.exports = router