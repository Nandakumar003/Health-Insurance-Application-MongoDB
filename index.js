require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path')
const cors = require('cors');
// Enable all CORS requests
app.use(cors());

// parses JSON bodies
app.use(express.json());

const userRoutes = require("./server/routes/user");
const noteRoutes = require("./server/routes/notes");

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


app.use("/user", userRoutes);
app.use("/note", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));