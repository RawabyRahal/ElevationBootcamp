// The processor ID
// The computer’s data-id - also, push this to an array in an object like this: {cmp_id: id}
// The BUS number

$('.generator').on('click', function () {
    let arr = []
    console.log($(this).closest("div").attr('id'))
    arr.push({ cmp_id: $(this).closest(".computer").attr('data-id') })
    // console.log($(this).closest(".computer").find('.BUS').text())
    console.log($(this).closest("div").siblings('.BUS').text())

})


// The generator’s text
// The MB
// Both QRs
$('.validator').on('click', function () {
    console.log($(this).closest(".computer").find('.generator').text())
    console.log($(this).closest(".computer").find('.MB').text())

    let qr = $(this).closest(".computer").find('.QR')
    for (let i = 0; i < qr.length; i++) {
        console.log($(qr[i]).text())
    }
})