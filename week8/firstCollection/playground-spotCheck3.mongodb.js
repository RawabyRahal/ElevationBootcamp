// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

db.firstCollection.update(
    { name: "Soren" },
    {
        $set: {
            dreams: []
        }
    }
)

db.firstCollection.update(
    { name: "Soren" },
    {$push:{
        dreams : {$each: ["Being like Razu", "Breaking the glass floor"]}

    }
})


db.firstCollection.find({})