// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

db.firstCollection.insert({name: "Spore", hobbies: ["Running", "Hip Hop", "Basketball", "Soccer"]})
db.firstCollection.insert({name: "Daniel", hobbies: ["Hip Hop", "Ballet", "Salsa", "Running"]})
db.firstCollection.insert({name: "Beckie", hobbies: ["Reading", "Running", "Hip Hop", "Writing", "Debate", "Philosophy"]})
db.firstCollection.insert({name: "Dugg", hobbies: ["Philosophy", "Psychology"]})

db.firstCollection.find({
    hobbies : "Philosophy"
})