const { count } = require("console")
const { find } = require("../models/bookModel")
const BookModel= require("../models/bookModel")


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const bookList= async function (req, res) {
    let allBooks = await BookModel.find().select({   bookName: 1, authorName: 1, _id: 0 })
    res.send({mag: allBooks})
}

const getBooksInYear = async function(req,res){
let askingYear = req.body.year
let diplayingBooks = await BookModel.find({   year : askingYear})
res.send({ msg : diplayingBooks})
}

const getParticularBooks = async function(req,res){
 let requestData = req.body
 let dispayingData = await BookModel.find(requestData)
 res.send({msg : dispayingData})
}

const getXINRBooks = async function(req,res){
let bookPricedAt = await BookModel.find({"prices.indianPrice": {$in : ["500INR","200INR","100INR"]}} )
res.send({msg : bookPricedAt})
}

const getRandomBooks = async function(req,res){
    let diplayingBooks = await BookModel.find({ 
        $or : [  { stockAvailable : true  }, {totalPages:{$gt : 500} }   ]
    
    })
res.send({msg : diplayingBooks })

}




module.exports.createBook= createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks