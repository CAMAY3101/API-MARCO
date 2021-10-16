const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    descripcion: {
        type: String,
        require: false,
        unique: false,
        trim: true,
        minlength: 0
    },
    fecha:{
        type: String,
        require: false,
        unique: false,
        trim: true,
        minlength: 0
    },
    
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;