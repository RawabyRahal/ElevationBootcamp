const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/computerDB ", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))


const Schema = mongoose.Schema

const computerSchema = new Schema({
    maker : String,
    price : Number,
})

const Computer  = mongoose.model('computer', computerSchema)

let c1 = new Computer({ maker: "HP", price: 1300 })
let c2 = new Computer({ maker: "Apple", price: 3900 })

const computers = [c1, c2]
computers.forEach(c => c.save())
