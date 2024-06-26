// 1. import any needed libraries
const express = require("express");
const Note = require('../models/notes'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router
    .post('/add', async (req, res) => {
        try {
            await Note.addNotes(req.body.id, req.body.NotesDetail);
            res.send({ message: `Notes Added Successfully!!` });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/get', async (req, res) => {
        try {
            const notes = await Note.getAllNotes(); // Assuming getAllNotes method exists in your Note model
            res.send(notes);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    })
    //Update a NOte
    .put('/update', async (req, res) => {
        try {
            const notes = await Note.updateNote(req.body.id, req.body.NotesDetail);
            res.send({ message: `Notes Added Successfully!!` });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await Note.deleteNote(req.body.id);
            res.send({ success: "Note deleted Successfully!!" });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })


// 3. export router for use in index.js
module.exports = router;