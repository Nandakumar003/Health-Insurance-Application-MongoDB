require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path')

app.use(express.json()); // parses JSON bodies


const userRoutes = require("./server/routes/user");
const userNotes = require("./server/routes/notes");
const userRoutes_Mongo = require("./server/routes/user_mongo");

mongoose.connect(process.env.dbURL)
    .then(console.log("Successfully Connected to Mongo DB!!"))
    .catch(error => console.log(error));


//CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use(express.static(__dirname + "/public"))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + "/public/html/index.html")))


app.use("/users", userRoutes);
app.use("/notes", userNotes);
app.use("/users_mongo", userRoutes_Mongo);
//a
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));