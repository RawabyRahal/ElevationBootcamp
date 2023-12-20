const express = require('express')
const app = express()

const details = {
    zipcode: "6863155",
    city: "Ankh Morpork",
    middleName: "Wilfred"
}


const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

app.get('/details', function (request, response) {
    let params = request.query
    response.send(params)
})