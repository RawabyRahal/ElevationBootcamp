const express = require('express')
const path = require('path')
const app = express()


// for serving files by the serever
app.use(express.static(path.join(__dirname, 'dist')))

// if we have frontend libraries or dependencies installed in 'node_modules'
// that we wanna make available to the client-side we can use this middleware to serve them.
app.use(express.static(path.join(__dirname, 'node_modules')))


const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

// example of handling required parameters - request.params
app.get('/landing/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

// example of handling optional parameters - request.query.name (in this case, 'name' is an optional parameter obtained from the URL)
app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})