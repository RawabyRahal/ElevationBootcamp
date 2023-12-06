$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

const text = "Banana"
const item = $(`<div class=fruit>${text}</div>`)

console.log(item) //the same

// $("p").remove()
$("p").remove(".brown")



const addDiv = function() {
    $("body").append("<div class=box></div>")
  };
  
  $("button").on("click", function() {
    addDiv()
  });
  
//   $(".box").on("click", function() {
//     alert("hi")
//   });