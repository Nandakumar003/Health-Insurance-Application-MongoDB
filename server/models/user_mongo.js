// 1. import mongoose
const mongoose = require("mongoose");

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
//CREATE a user
async function register(FirstName, LastName, Username, Email, Password) {
    const user = await getUser(Username);
    if (user) throw Error('Username already in use');

    const newUser = await User.create({
        FirstName: FirstName,
        LastName: LastName,
        Username: Username,
        Email: Email,
        Password: Password
    });

    return newUser;
}

// GET all Users
async function getAllUsers() {
    const database = client.db('test');
    const collection = database.collection('users');
    const users = await collection.find().toArray()
    console.log(users);
    return users;
}

// READ a user
async function login(Username, Password) {
    const user = await getUser(Username);
    if (!user) throw Error('User not found');
    if (user.Password != Password) throw Error('Wrong Password');

    return user;
}

// UPDATE
async function updatePassword(id, Password) {
    const user = await User.updateOne({ "_id": id }, { $set: { Password: Password } });
    return user;
}

//DELETE
async function deleteUser(id) {
    await User.deleteOne({ "_id": id });
};

// utility functions
async function getUser(Username) {
    return await User.findOne({ "Username": Username });
}

// 5. export all functions we want to access in route files
module.exports = {
    register, login, updatePassword, deleteUser, getAllUsers
};