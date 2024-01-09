const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address: {
        city: String,
        street: String,
        apartment: Number
    }
})

const Person = mongoose.model('person', personSchema)
let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
// console.log(p1)
p1.save()

// Person.find({}).then(function (people) {
//     console.log(people)
// })


let peoplePromise = Person.find({})

peoplePromise.then(function (people) {
    // console.log(people)
})
    .catch((err) => console.log(err))

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// Person.findById("6593fc654ae98f65d7bd8138").then(function (person) {
//     person.age += 10 //how time flies

//     person.save()
//     console.log(person)
// })

Person.findByIdAndUpdate("6596bd1b00508dfe32418b78", {$set:{ age: 80 }}).then( function (person) {
    console.log(person)
})

// Person.findByIdAndDelete("6593fcf8560976197f28b94e").then((person) => {
//     // Person.findById("6593fc654ae98f65d7bd8138").then(person => console.log(person))
//     console.log(person)
// })
