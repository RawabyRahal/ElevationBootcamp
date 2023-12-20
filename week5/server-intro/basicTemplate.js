const express = require('express')
const app = express()
const path = require('path')


// Serving Files by Server
app.use(express.static(path.join(__dirname, 'dist')))

// Serving Files
// If we have frontend libraries or dependencies installed in 'node_modules'
// that we wanna make available to the client-side we can use this middleware to serve them.
app.use(express.static(path.join(__dirname, 'node_modules')))


const port = 3000
// Server is listening - the Server ready to accept requests
app.listen(port, function () {
    console.log(`Running server on port port`)
})

// Serving Data - cRud operation
// Example of handling required parameters - request.params
app.get('/landing/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

// Serving Data - cRud operation
// Example of handling optional parameters - request.query.name (in this case, 'name' is an optional parameter obtained from the URL)
app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})

// Serving Data - Crud operation
app.post('/wonder', function (req, res) {
    console.log("Someone's trying to make a post request")
})