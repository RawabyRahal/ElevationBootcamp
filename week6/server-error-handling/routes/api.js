// Import required module
const express = require('express')
const app = express()
const router = express.Router()

const users = [
    { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
    { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
    { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
    { username: "marc", name: "Marco", country: "Greece", age: 63 },
    { username: "kev", name: "Kevin", country: "Italy", age: 31 }
]

router.get('/users', function (req, res) {
    res.send(users)
})

// router.post('/users', function (req, res) {
//     const newUser = req.body

//     console.log(newUser.username.length)

//     if(newUser.username == ""){
//         res.status(404).send({ "Error": `User is empty!` })
//         return
//     }
//     if(users.find(us => us.username == newUser.username)){
//         res.status(404).send({ "Error": `User ${newUser.username} exist!` })
//         return
//     }
//     if (!newUser.username.match(/^[a-z]+$/i)) {
//         res.status(400).send({ "Error": `${newUser.username} is not a valid name` })
//         return
//     }
//     users.push(newUser)
//     res.status(201).end()
// })
const usersModule = require('../dist/usersModule')

app.post('/users', function (req, res) {
    const newUser = req.body
    const userName = newUser.username
    if (!userName.match(/^[a-z]+$/i)) {
        res.status(400).send({ "Error": `${userName} is not a valid name` })
        return
    }
    let doesExist = users.some(w => w.username === userName)
    if (doesExist) {
        res.status(409).send({ "Error": `User ${userName} already exist` })
        return
    }
    users.push(newUser)
    res.status(201).end()
})

router.delete('/users/:username', function (req, res) {
    let username = req.params.username
    let userIndex = users.findIndex(user => user.username === username)

    if (userIndex === -1) {
        res.status(404).send({ "Error": `User ${username} does not exist` })
    } else {
        users.splice(userIndex, 1)
        res.status(204).end()
    }
})


module.exports = router