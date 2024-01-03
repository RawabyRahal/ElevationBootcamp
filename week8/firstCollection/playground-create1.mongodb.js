// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

// db.firstCollection.insert({name: "You"})

db.firstCollection.insert({
    name: "Razu",
    hometown: {
        city: "Razuville",
        country: "Razuland"
    },
    hobbies: ["Razu-ing", "Razu Surfing", "Razu Cooking"]
})
db.firstCollection.find({})