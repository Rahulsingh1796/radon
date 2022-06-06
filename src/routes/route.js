const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController");
const res = require('express/lib/response');

router.get("/books", function (req, res) {
    res.send("My first ever api!")
});

router.post("/createBook", UserController.createBook)


router.get("/getBooksData", UserController.getBooksData)

module.exports = router;