const UsersServices = require('../services/users')


module.exports = {
    login: async (req, res) => {
        // Notice our app declared app.use(express.json()); for doing this
        const { correo, password } = req.body;

        const token = await UsersServices.login(correo, password)
        if (token)
            res.status(201).json({
                message: "token",
                token: token,
                success: true
            });
        else {
            res.json({ message: "Authentication Failed", success: false })
        }
    },
    addUser: async (req, res) => {
        const { name, lastname, correo, password, usertype } = req.body

        const newUser = await UsersServices.addUser(name, lastname, correo, password, usertype)
        res.status(201).json({
            message: "User added",
            newUser
        })
    },
    getUser: async (req, res, next) => {
        const user = await UsersServices.getUser(req.params.correo);
        console.log(user)
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ "mesagge": "NotFound" });
        }
    }
}