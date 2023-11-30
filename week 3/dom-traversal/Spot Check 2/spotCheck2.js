$("button").on('click', function() {
    console.log($(this).siblings('div').find('p').text())
})