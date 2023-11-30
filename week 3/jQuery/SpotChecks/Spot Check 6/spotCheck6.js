for(let i=0 ; i <10 ; i++)
{
    // box.setAttribute("id", box)
    // $("#box").appendChild(box)
    $("#box").hover(function () {
        $("#box").css("background-color", "blue")
    },function(){
        $("#box").css("background-color", "black")

    })
}