const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    categogy: String,
    year: Number
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



