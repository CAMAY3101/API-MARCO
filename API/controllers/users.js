const UsersServices = require('../services/users')


module.exports = {
    addUser : async(req, res) => {
        const { name, lastname, correo, password, usertype} = req.body

        const newUser = await UsersServices.addUser(name, lastname, correo, password, usertype)
        res.status(201).json({
            message: "User added", 
            newUser
        })
    }
}