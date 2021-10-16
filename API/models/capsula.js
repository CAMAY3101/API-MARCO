const mongoose = require("mongoose")
const Schema = mongoose.Schema

const capsulaSchema = new Schema({
    artista:{
        type: String,
        require: true,
        unique: false,
        trim: true
    },
    resumen:{
        type: String,
        require: true,
        unique: false,
        trim: true,
        minlength: 10
    },
    avatar:{
        type: String,
        require: true,
        unique: false,
        trim: true,
        minlength: 1
    }
})

const Capsula = mongoose.model("Capsula", capsulaSchema)

module.exports = Capsula;