// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

// db.firstCollection.update(  
//     {name: "Soren"}, 
//     {$pull: {
//         dreams: "Being like Razu"
//     }}
// )

// db.firstCollection.update(
//     { name: "Soren" },
//     {
//         $pop: {
//             dreams: 1
//         }
//     })


db.firstCollection.find({})