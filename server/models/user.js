// 1. import mongoose and bcrypt
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// 2. create schema for entity
const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Username: { type: String, unique: true, required: true },
    Email: { type: String, unique: true, required: true },
    Password: { type: String, required: true },
})

// 3. create model of schema
const User = mongoose.model("User", userSchema);

// 4. create CRUD functions on model

// Get All Users
async function getAllUsers() {
    try {
        return await User.find({});
    } catch (error) {
        throw new Error('Error retrieving User: ' + error.message);
    }
};

//CREATE a user
async function register(FirstName, LastName, Username, Email, Password) {
    const user_name = await getUser(Username);
    if (user_name) throw Error('Username already in use!!');
    const user_email = await getEmail(Email);
    if (user_email) throw Error('Email already in use!!');
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(Password, salt);
    const newUser = await User.create({
        FirstName: FirstName,
        LastName: LastName,
        Username: Username,
        Email: Email,
        Password: hashed
    });

    return newUser._doc;
}

// GET all Users
async function getAllUsers() {
    const database = client.db('test');
    const collection = database.collection('users');
    const users = await collection.getUsers();
    console.log(users);
    return users._doc;
}

// READ a user
async function login(Username, Password) {
    var user = await getUser(Username);
    if (!user) {
        var user = await getEmail(Username);
        if (!user) throw Error("Username/Email do not exist!!");
    }
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) throw Error('Wrong Password');
    return user._doc;
}

// UPDATE
async function updatePassword(id, Password) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(Password, salt);
    await User.updateOne({ "_id": id }, { $set: { Password: hashed } });
    const user = await User.findById(id);
    return user._doc;
}

//DELETE
async function deleteUser(id) {
    await User.deleteOne({ "_id": id });
};

//Search User..
async function searchUser(User) {
    var user = await getUser(User);
    if (user) {
        return user._doc;
    }
    else {
        var user = await getEmail(User);
        if (user) {
            return user._doc;
        }
        throw Error("Username/Email do not exist!!");
    }
}

// utility functions
async function getUser(Username) {
    return await User.findOne({ "Username": Username });
}
async function getEmail(Email) {
    return await User.findOne({ "Email": Email });
}

// 5. export all functions we want to access in route files
module.exports = {
    register, login, updatePassword, deleteUser, getAllUsers, searchUser
};