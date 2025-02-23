const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true

    },

    bookType: {
        type: String,
        required:true

    },

})

module.exports = mongoose.model('Book', bookSchema)