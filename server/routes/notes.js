// 1. import any needed libraries
const express = require("express");
const Note = require('../models/notes');
const router = express.Router();

router
    .post('/add', async (req, res) => {
        try {
            await Note.addNotes(req.body.id, req.body.NotesDetail);
            res.send({ Success: `Notes Added Successfully.` });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getAllNotes', async (req, res) => {
        try {
            const notes = await Note.getAllNotes();
            res.send(notes);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })


    .get('/getUserNotes', async (req, res) => {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).send({ message: 'User ID is required' });
        }
        try {
            const notes = await Note.getUserNotes(userId);
            res.send(notes);
        } catch (error) {
            res.status(401).send({ message: 'Error retrieving notes: ' + error.message });
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