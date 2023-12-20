const express = require('express')
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.get('/', function (request, response) {
    console.log('Holaaaaa')
    response.send('Server is up and running smoothly')
})

app.get('/priceCheck/:name', function (request, response) {
    let item = store.find(name => name.name === request.params.name)

    if (item) {
        let priceItem = item.price
        response.send(`The Price for ${request.params.name} is : ${priceItem}`)
    }
    else {
        response.send(`Price: null`)
    }
})

app.get('/buy/:name', function (request, response) {
    let item = store.find(name => name.name === request.params.name)
    let itemIndex = store.findIndex(name => name.name === request.params.name)
    console.log(itemIndex)

    if (item) {
        item.inventory--
        if (item.inventory >= 0)
            response.send({
                inventory: item.inventory,
                name: item.name,
                price: item.price
            })
        else
            response.send(`Inventory: null`)

    }
    else {
        response.send(`Inventory: null`)
    }
})
// ./sale/?admin=true
// ./sale
app.get('/sale', function (request, response) {
    let admin = request.query.admin === 'true'
    // console.log(request.query)
    // response.send(admin)

    if (admin) {
        for (let item of store) {
            console.log(item)
            if (item.inventory > 10)
                item.price *= 0.5
        }
    }
    response.send({
        data : store
    })
})
