const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let name in names){
   person = {
        name: names[name],
        age: ages[name]
    };
  
    people.push(person);
    console.log(person.name + ' is ' + person.age + ' years old')
    
}

const posts = [
    {id: 1, text: "Love this product"},
    {id: 3, text: "So glad I found this. Bought four already!"},
    {id: 2, text: "This is the worst. DON'T BUY!"}
  ]

  for(let postIndex in posts){
    if(posts[postIndex].id === 2){
        posts.splice(postIndex,1)
    }
  }
console.log(posts)

