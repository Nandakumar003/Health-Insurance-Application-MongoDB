// 1. import any needed libraries
const express = require("express");
const User = require('../models/user_mongo'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router

    .get('/getUsers', async (req, res) => {
        try {
            const users = await User.getAllUsers() // Exclude the password field
            res.send(users);
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })

    .post('/register', async (req, res) => {
        try {
            const user = await User.register(req.body.FirstName, req.body.LastName, req.body.Username, req.body.Email, req.body.Password);
            res.send({ ...user, Password: undefined });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/login', async (req, res) => {
        try {
            const user = await User.login(req.body.Username, req.body.Password);
            res.send({ ...user, Password: undefined });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .put('/update', async (req, res) => {
        try {
            const user = await User.updatePassword(req.body.id, req.body.Password);
            res.send({ ...user, Password: undefined });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await User.deleteUser(req.body.id);
            res.send({ success: "Account deleted" });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

// 3. export router for use in index.js
module.exports = router;