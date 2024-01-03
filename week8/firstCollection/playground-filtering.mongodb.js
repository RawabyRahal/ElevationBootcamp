// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

db.firstCollection.find({
    $and:[
        {salary: {$gt: 1000}},
        {salary: {$lt: 1500}}
    ]
})