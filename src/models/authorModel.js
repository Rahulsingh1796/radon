const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName: String,
    author_name: String,
    age:Number,
    address:String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
