// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm " + this.username)
//     }
//   }
  
//   person.introduce()



// const counter = {
//     count: 0,
  
//     updateCounter: function () {
//       this.count += 1;
//     }
//   };
  
//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();

//   console.log(counter.count);


const cat = {
    makeNoise: function () {
      console.log(this.noise);
    },
    noise: "Meow!"
  };
  
  const dog = {
    makeNoise: cat.makeNoise,
    noise: "Woof!"
  };
  
  cat.makeNoise();
  dog.makeNoise();