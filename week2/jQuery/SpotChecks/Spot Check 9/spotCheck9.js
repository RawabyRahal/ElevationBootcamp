$(".feedme").on("click", function(){
    let divCopy = $("<div class=feedme>" + $(this).text() + "</div>")
    
    $("body").append(divCopy)
  })