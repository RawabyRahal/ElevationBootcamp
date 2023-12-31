const express = require('express')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/test/:data', function (req, res) {
    console.log("Someone is getting!")
    console.log(req.params.data)
    res.send("Thanks for the get, here's a potato.")
})

app.post('/test', function (req, res) {
    console.log("Someone is posting!")
    res.send("Thanks for the post, here's a potatoe.")
})

app.post('/testData', function (req, res) {
    console.log(req.body)
    res.end()
})

const port = 4349
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})