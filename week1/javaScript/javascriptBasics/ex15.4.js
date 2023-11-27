const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { //arr= {1,2,3}  , comments.splice(2,1)
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for(let postIndex in posts){
  if(posts[postIndex].id == 2){
    for(let com in posts[postIndex].comments){
      if(posts[postIndex].comments[com].id == 3){
      console.log('$$$$$ ' + JSON.stringify(posts[postIndex].comments.splice(com,1)))
      }
  }
}
}
console.log(JSON.stringify(posts))