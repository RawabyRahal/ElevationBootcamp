const getRecipe = function () {
    let ingredient = $("#search").val()
    console.log(ingredient)
    $.get(`/recipes/${ingredient}`, function (data) {
        console.log(data)
        $("#recipes").empty()
        let newHtml = templateRecipes({ recipes : data })
        $("#recipes").append(newHtml)
    })
    // fetch()
}

