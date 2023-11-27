$(".item[data-instock=true]").on("click", function () {
    let divCopy = $("<div> " + $(this).html() + "</div>")
    $("#items").append(divCopy)
})