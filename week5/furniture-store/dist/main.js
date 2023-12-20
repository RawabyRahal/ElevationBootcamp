const fetchFurnitureData = function () {
    let input = $("#furniture").val()

    $.get(`/priceCheck/${input}`, function (furnitureData) {
        // $("body").append(`<div>${bookData.title} - ${bookData.author}`)
        $("body").append(`<div>${furnitureData}</div>`)

    })
} 

const buy = function () {
    let input = $("#buy").val()

    $.get(`/buy/${input}`, function (buyData) {
        $("body").append(`<div>Congratulations, you’ve just bought ${buyData.name} for ${buyData.price}. There are ${buyData.inventory} left now in the store.</div>`)
    })
} 