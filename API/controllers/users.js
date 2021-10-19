const UsersServices = require('../services/users')


module.exports = {
    addUser : async(req, res) => {
        const { name, lastname, correo, password, usertype} = req.body

        const newUser = await UsersServices.addUser(name, lastname, correo, password, usertype)
        res.status(201).json({
            message: "User added", 
            newUser
        })
    },
    getUser: async(req,res, next) => {
        const user = await UsersServices.getUser(req.params.correo);
        console.log(user)
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ "mesagge": "NotFound" });
        }
    }
}