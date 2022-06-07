const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook)

router.post("/createAuthor", BookController.createAuthor )

router.get("/getBooksByChetanBhagat", BookController.getBooksByChetanBhagat)

router.get("/authorOfBook", BookController.authorOfBook)

module.exports = router;