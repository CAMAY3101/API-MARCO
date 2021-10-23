const mongoose = require('mongoose');
const UserModel = require('../models/user.js')
const jwt = require("jsonwebtoken")

const login = async (correo, password) => {

    if (!correo || !password) {
        return false
    }

    //const  authUser = User.find(user => user.username && user.password == password)
    const authUser = await UserModel.findAndValidate(correo, password);

    if (authUser) {
        //generate a token
        const token = jwt.sign({ correo: correo }, "SECRET")

        if (token) {
            return token
        } else {
            return false
        }
    } else {
        return false
    }
    // All validation, checks, further tasks (sending emails, etc.) must happen here.
    //return token;

};

const addUser = async (name, lastname, correo, password, usertype) => {
    const usermodel = new UserModel({
        name: name,
        lastname: lastname,
        correo: correo,
        password: password,
        usertype: usertype
    })

    const newUser = await usermodel.save();
    return newUser;
}
const getUser = async (correo) => {
    const user = await UserModel.findOne({ correo });

    return user;
};

module.exports = {
    addUser, getUser, login
}