require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path')
const cors = require('cors');

// parses JSON bodies
app.use(express.json());

// Enable all CORS requests
app.use(cors());

const userRoutes = require("./server/routes/user");
const noteRoutes = require("./server/routes/notes");

mongoose.connect(process.env.dbURL)
    .then(console.log("Successfully Connected to Mongo DB!!"))
    .catch(error => console.log(error));


app.use("/user", userRoutes);
app.use("/note", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));