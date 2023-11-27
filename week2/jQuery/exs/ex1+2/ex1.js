$("button").on("click", function () {
    console.log($("#my-input").val())
    // let Q = $("<li>Quimby</li>")
    // $("body").append(Q)
    let divCopy = $("<div > <li class='human'>" + $("#my-input").val() + "</li></div>")
    $("#people").append(divCopy)
    $('.human').on('click', function () {
        $(this).remove(".human")
    })
})
