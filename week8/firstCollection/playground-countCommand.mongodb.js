// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

// db.firstCollection.count({
//     salary:{
//         $gt: 1200
//     }
// })

db.firstCollection.find({
    salary: {
        $gt: 200
    }
}).limit(2)

// db.firstCollection.find(
//     {salary:{
//             $gt: 1200
//         }
// })