$('button').on('click', function() {
    alert($(this).closest("div").find('span').text())
})