const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exposicionSchema = new Schema({
    name:{
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    artista: {
        type: String,
        require: true,
        unique: false,
        trim: true,  
    },
    descripcion:{
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    fechaI:{
        type: Date,
        require: true,
        unique: false,
        trim: true,
    },
    imagenes:{
        type: Buffer,
        contentType: String,
        require: true,
        unique: false,
        trim: true,
    }
}, {
    timestamps: true
});

const Exposicion = mongoose.model('Exposicion', exposicionSchema)

module.exports = Exposicion;