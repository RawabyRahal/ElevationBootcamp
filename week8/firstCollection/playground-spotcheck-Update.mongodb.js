// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

db.firstCollection.update({
    name : "Loreli"
},
    {
        $set:{
            salary : 1050
        }
    }
)

// db.firstCollection.find({})