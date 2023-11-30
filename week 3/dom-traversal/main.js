$(".remove").on("click", function () {
  alert($(this).closest(".post").data().id)
})

$('button').on('click', function () {
  let relevantInputValue = $(this).closest("div").find("input").val()
  alert(relevantInputValue)
})