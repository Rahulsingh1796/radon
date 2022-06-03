const express = require('express');
const res = require('express/lib/response');
const externalModule = require('../logger/logger');
const newRepo = require('../util/helper');
const newRepo1 = require('../validator/formatter');
const lodash = require('lodash');
const { append } = require('express/lib/response');
const req = require('express/lib/request');


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

router.get('/hello', function (req, res) {
    //Problem 1

    const arrayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    console.log(lodash.chunk(arrayMonths, 3))


    //Problem 2

    const oddArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(oddArray))


    //Problem 3

    const arr1 = [1, 2, 3]
    const arr2 = [2, 4, 5, 6]
    const arr3 = [3, 4, 7, 8, 9]
    const arr4 = [10, 11, 1]
    const arr5 = [1, 4, 9, 5, 11, 2]
    console.log(lodash.union(arr1, arr2, arr3, arr4, arr5))


    //Problem 4

    const movies = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]

    console.log(lodash.fromPairs(movies))



    res.send('this is hello api!')

});

//moviea API
const movies = [
    'Rang de basanti', 
    'The shining', 
    'Lord of the rings', 
    'Batman begins'
];

router.get('/movies', function (req, res) {
    if(req.query["name"]?.length > 0){
        const newMovies = movies.filter((s) =>
        s.toLowerCase().icludes(req.query["name"])
);
        res.send(newMovies);
        
    }else res.send(movies);
    
});

//second api find movies by using index

router.get('/movies/:indexNumber', function (req, res) {
    const movie =movies.filter((item,index) => index ==req.params.indexNumber);
    if(movie.length > 0) res.send(movies);
    else res.send("invalid index: Please enter a valid index");
});
    
   

//Third api called films

    const films = [
        {
        'id': 1,
        'name': 'The Shining'
    },
    {
        'id': 2,
        'name': 'Incendies'
    }, 
    {
        'id': 3,
        'name': 'Rang de Basanti'
    }, 
    {
        'id': 4,
        'name': 'Finding Nemo'
    }];
    router.get('/films', function (req, res) {
    res.send(films);



});

router.get('/films/:filmId', function (req, res) {
    const film = films.filter((s)=> s.Id == req.param.filmId);
    res.send(film);

});
       
module.exports = router;
// adding this comment for no reason