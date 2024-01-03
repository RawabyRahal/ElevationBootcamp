const express = require('express')
const router = express.Router()

const Person = require('./Person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})


router.post('/people', function (req, res) {
    Person.create({
        firstName : "Alexander",
        lastName : "Rahal",
        age : 35
    }).then(function (person){
        res.send(person)
    })
})

router.put('/people/:id' , function(req , res){
    const id = req.params.id
    Person
    .findByIdAndUpdate(id , {$set : {age : 80}} , {new : true})
    .then(function (person){
        res.send(person)
    }).catch(function (err){
        console.log(err)
    })
})

router.delete('/apocalypse', function(req , res){
    Person.deleteMany({})
    .then(function (people){
        res.send(people)
    })
})


module.exports = router