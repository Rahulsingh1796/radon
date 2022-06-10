const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const mongoose = require('mongoose');

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author_id")
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    
    let data = req.body

    if (!data["author_id"]){
        return res.send("this author_id is required")

    }
    if (!data["publisher_id"]){
        return res.send("this publisher_id is required")

    }
    if (mongoose.isValidObjectId("data")) {
        return collection.findOne({ _id: "data" })
    }
    // let authors = await authorModel.find().select("id")
    // console.log(authors)
    // if(data){
    //     let specificBook = await bookModel.find().populate('author_id')
    //     res.send({data: specificBook})
    // }
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
