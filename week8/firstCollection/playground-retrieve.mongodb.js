// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

// db.firstCollection.insert({ name: "Louise", salary: 1200 })
// db.firstCollection.insert({ name: "Rayna", salary: 2300 })
// db.firstCollection.insert({ name: "Soren", salary: 1500 })
// db.firstCollection.insert({ name: "Loreli", salary: 800 })
// db.firstCollection.insert({ name: "Milo", salary: 950 })
// db.firstCollection.insert({ name: "Brendon", salary: 1100 })

// db.firstCollection.find({
//     name: "Milo"
// })

db.firstCollection.find({
    salary:{
        $gt:1200
    }
})