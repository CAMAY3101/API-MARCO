const bcrypt = require('bcrypt')

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw,12)
    console.log(hash);
    return hash;
}

const login = async (password, hashedPW) => {
    const result = await bcrypt.compare(password, hashedPW);
    if (result) {
        console.log("Password correcto")
    }
    else {
        console.log("Password Incorrecto")
    }
}
hashPassword('user');
login('user', '$2b$12$gUEivcOmPfYxueVV4t4s/.VQqO..dvYa0SsnNFNGJQSY8eVmLtZ.m');