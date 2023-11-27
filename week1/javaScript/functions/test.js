const greet = function(){
    console.log("Hello there")
  }

  greet()

  function greet2(){
    console.log("Hello there, from the wild, wild West")
  }
  greet2()


//   greet3() //works without a problem
// greetExpression() //throws an error

// function greet3(){
//   console.log("Hello there, from the wild, wild West")
// }

// const greetExpression = function(){
//   console.log("Uh oh")
// }


const person = {
    name: "Julius",
    speak: function(food ) {
      console.log("I like " + food)
    }
  }
console.log(person.name) //you know what this will do

person.speak("cheese toast") //and this? Try it out!