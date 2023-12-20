const source = $("#recipes-template").html()
const templateRecipes = Handlebars.compile(source)

const render = function (recipes) {
    $("#recipes").empty()
    let newHtml = template({ recipes })
    $("#recipes").append(newHtml)
}

const fetch = function () {
    $.get("/recipes", function (response) {
        render(response)
    })
}


const getRecipe = function () {

    const ingredient = $("#search").val()
    const gluten = $("#glutenfree").prop("checked");
    const dairy = $("#dairyfree").prop("checked");

    $.get(`/recipes/${ingredient}?dairy=${dairy}&gluten=${gluten}`, function (data) {
        console.log(data)
        $("#recipes").empty()
        // const ingredientExists = data[rec].ingredients.every(ingredient => !ingredient.toLowerCase().includes(data.ingredients[ing].toLowerCase()));
        // if (!ingredientExists) {
        //     $("#recipes").append("Ingredient not found");
        // }

        if (data == "TRY AGAIN!") {
            $("#recipes").append("<div class='notfound' style='color: red; text-align:center'>" + ingredient + " ingredient not found</div>");
        }

        let newHtml = templateRecipes({ recipes: data })
        $("#recipes").append(newHtml)
        $(".imageid").on("click", function () {
            const ingID = $(this).closest(".card").find("li:first").text()
            alert("The First Ingredient for this Recipe is: " + ingID)
        })
    })
}


$("#searchbtn").on("click", function () {
    // I've to rerender!!!
})