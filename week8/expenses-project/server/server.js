const express = require('express')
const app = express()
const api = require('./routes/api')
const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/expenseDB", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)

const port = 8585
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})