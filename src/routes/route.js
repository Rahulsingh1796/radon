const express = require('express');
const res = require('express/lib/response');
const externalModule = require('../logger/logger');
const newRepo = require('../util/helper');
const newRepo1=require('../validator/formatter');
const lodash =require ('lodash')


const router = express.Router();

router.get('/test-me', function (req, res) {
    
    res.send('My first ever api!')
    externalModule.welcome()
    newRepo.printDate()
    newRepo.printMonth()
    newRepo.getBatchInfo()
    newRepo1.Trim()
    newRepo1.changetoLowerCase()
    newRepo1.changeToUpperCase()

});

router.get('/hello', function (req,res) {
    //Problem 1

    const arrayMonths =['January', 'February', 'March', 'April','May', 'June', 'July','August', 'September', 'October', 'November', 'December']

    console.log(lodash.chunk(arrayMonths,3))


    //Problem 2

    const oddArray= [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddArray))


    //Problem 3

    const arr1=[1,2,3]
    const arr2=[2,4,5,6]
    const arr3=[3,4,7,8,9]
    const arr4=[10,11,1]
    const arr5=[1,4,9,5,11,2]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))


    //Problem 4

    const movies=[ ["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"] ]
    
    console.log(lodash.fromPairs(movies))






    res.send ('this is hello api!')

    });
    
    let players = []

router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});


module.exports = router;
// adding this comment for no reason