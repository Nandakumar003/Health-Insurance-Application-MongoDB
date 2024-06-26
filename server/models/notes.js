// 1. import mongoose 
const mongoose = require("mongoose");

// 2. create schema for entity
const noteSchema = new mongoose.Schema({
    User_id: { type: String, required: true },
    NotesDetail: { type: String, required: true },
}, {
    timestamps: true
});

// 3. create model of schema
const Notes = mongoose.model("Notes", noteSchema);

// 4. create CRUD functions on model

//Adding a note
async function addNotes(id, NotesDetail) {
    const newNotes = await Notes.create({
        User_id: id,
        NotesDetail: NotesDetail
    });
    return newNotes._doc;
}

//Getting all the notes
async function getAllNotes(id) {
    try {
        return await Notes.find({});
    } catch (error) {
        throw new Error('Error retrieving notes: ' + error.message);
    }
};

//Update a Note
async function updateNote(id, NotesDetail) {
    const user = await Notes.updateOne({ "_id": id }, { $set: { NotesDetail: NotesDetail } });
    return user._doc;
}

//Delete a Note
async function deleteNote(id) {
    await Notes.deleteOne({ "_id": id });
};


// 5. export all functions we want to access in route files
module.exports = {
    addNotes, getAllNotes, updateNote, deleteNote
};