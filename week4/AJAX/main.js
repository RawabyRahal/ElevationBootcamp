// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })

// $.get("https://www.googleapis.com/books/v1/volumes?q=title: Name of the Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })



// let person = {name: "Kyle", age: 37}
// let expectedYearsLeft = 120 - person.age

// console.log(`${person.name} has ${expectedYearsLeft} years to live`) //prints Kyle has 83 years to live


// let person
// setTimeout(function(){
//   person = {name: "Kyle", age: 37}
// }, 1000)

// let expectedYearsLeft = 120 - person.age

// console.log(`${person.name} has ${expectedYearsLeft} to live`)


// using named funtion in succes instead of anonymous function
const useData = function(data){
  console.log(data)
}

$.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: useData
  }); 