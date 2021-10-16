const mongoose = require("mongoose")
const Schema = mongoose.Schema

const audioguiaSchema = new Schema({
    nombre_expo:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    descripcion:{
        type: String,
        require: true,
        unique: false,
        trim: true,
        minlength: 50
    },
    audio:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 4
    }

})

const Audioguia = ("Audioguia", audioguiaSchema)

module.exports = Audioguia;