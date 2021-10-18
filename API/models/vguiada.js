const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vguiadaSchema = new Schema({
    reservador: {
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    Nguia: {
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    fecha: {
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    hora: {
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    Npersonas: {
        type: Number,
        require: true,
        unique: false,
        trim: true,
    },
    disponible: {
        type: Boolean,
        require: true,
        unique: false,
        trim: true,
    },
})

const Vguiada = mongoose.model("Vguiada", vguiadaSchema)

module.exports = Vguiada;