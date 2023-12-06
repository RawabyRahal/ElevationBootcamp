let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

// let olderThan16 = []
// for(let age of ages){
//   if(age > 16){
//     olderThan16.push(age)
//   }
// }

let olderThan16 = ages.filter(a => a > 16)
console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]

let poundWeights = [142, 180, 178, 121, 132]

let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
console.log(kiloWeights) //prints [65, 82, 81, 55, 60]

// find()
let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]
const findById = id => posts.find(p => p.id === id)
console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}