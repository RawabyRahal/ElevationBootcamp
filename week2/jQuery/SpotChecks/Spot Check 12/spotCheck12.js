
$('button').on('click', function () {
    $("#blogs").append("<div class='blog'>Hello</div>")
    $('.blog').on('click', function () {
        $(this).text('blargh')
    })
})
