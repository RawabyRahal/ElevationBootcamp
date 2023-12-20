const express = require('express')
// console.log(express)

const app = express()
// console.log(app)

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

console.log(__dirname)
console.log(path.join(__dirname, 'dist'))

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}


const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting :)")
})

app.get('/maps', function (request, response) {
    response.send("Here's some stuff related to maps")
})

app.get('/shoobi', function (request, response) {
    response.send("This here is the shoobi *route*")
})

app.get('/life', function (request, response) {
    response.send("42")
})

app.get('/landing/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

app.get('/users/:userId', function (request, response) {
    response.send(`${users[request.params.userId]}`)
})
