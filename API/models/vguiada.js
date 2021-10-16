const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vguiadaSchema = new Schema({
    fecha:{
        type: String,
        require: true,
        unique: false,
        trim: true,
        minlength: 8
    },
    hora:{
        type: String,
        require: true,
        unique: false,
        trim: true,
        minlength: 0
    },
    capacidad:{
        type: Number,
        require: false,
        unique: false,
        trim: true,
        minlength: 2
    }
})

const Vguiada = ("Vguiada", vguiadaSchema)

module.exports = Vguiada;