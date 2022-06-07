const { count } = require("console")
const { find } = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")



const createBook= async function (req, res) {
    let data= req.body
    let saveData= await BookModel.create(data)
    res.send({msg: saveData})
}


const createAuthor= async function (req, res) {
    let data= req.body
    let saveData = await AuthorModel.create(data)
    res.send({mag: saveData})
}

const getBooksByChetanBhagat = async function (req,res){
    let data = await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    console.log(data)
    let bookData = await BookModel.find({author_id: data[0].author_id})
    console.log(bookData)
    res.send({msg: bookData})

}

const authorOfBook = async function (req,res){
    let data = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    console.log(data)
    let authorData = await AuthorModel.find({author_id: data.author_id}).select({author_name: 1})
    console.log(authorData)
    let price = data.prices
    res.send({msg:authorData[0].author_name})

}



module.exports.createBook= createBook
module.exports.createAuthor = createAuthor
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat
module.exports.authorOfBook = authorOfBook