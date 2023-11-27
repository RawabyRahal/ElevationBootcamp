let p1 = {
    name: "“Jill",
    age: 30,
    city: "Bangkok"
}

let p2 = {
  name: "Robert",
  age: 30,
  city: "Singapore"
}

if((p1.age == p2.age) && (p1.city == p2.city))
    console.log('Jill wanted to date Robert')

if((p1.age == p2.age) && (p1.city != p2.city))
    console.log('Jill wanted to date Robert, but couldn’t')


// Create an object called library that has a books key
// The value of books should be an array of book objects
// Each book should have a title and author key

let library = {
    books : [{
        title: 'b1',
        author: 'a1'
    },{
        title: 'b2',
        author: 'a2'
    },{
        title: 'b3',
        author: 'a3'
    },{
        title: 'b4',
        author: 'a4'
    },{
        title: 'b5',
        author: 'a5'
    },{
        title: 'b6',
        author: 'a6'
    },{
        title: 'b7',
        author: 'a7'
    },{
        title: 'b8',
        author: 'a8'
    }]
}