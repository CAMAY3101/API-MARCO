const mongoose = require('mongoose');
const UserModel = require('../models/user.js')

const addUser = async (name, lastname, correo ,password, usertype) => {
    const usermodel = new UserModel({
        name : name,
        lastname: lastname,
        correo: correo,
        password : password,
        usertype : usertype
    })

    const newUser = await usermodel.save();
    return newUser;      
}
const getUser = async (correo) => {
    const user = await UserModel.findOne({ correo });
    
    return user;
};

module.exports = {
    addUser, getUser
}