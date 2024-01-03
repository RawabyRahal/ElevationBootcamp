// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

// Remember “Razu” from earlier in this lesson?
// Write a query that filters based on his name, and only returns his city.

db.firstCollection.find({
    name : "Razu"
}, {
    "hometown.city" : 1,
    _id : 0
})