const apiManager = new APIManager()
const render = new Renderer()
let currentPage = ""

const getRecipes = (ingredients = []) => {
    console.log(ingredients)
    const ingredient = ingredients.length ? ingredients[0] : searchedIngredient.val()
    const gluten = isGlutenFree.prop("checked");
    const dairy = isDairyFree.prop("checked");

    apiManager.getAllData(ingredient, gluten, dairy, getCheckedCategories(), ingredients.slice(1)).then(function (data) {
        render.renderRecipes(data)
    }).catch(function (error) {
        console.error(error.responseJSON.error)
        render.renderError()
    })
}

$("#searchbtn").on("click", function () {
    currentPage = "search"
    getRecipes()
})

$("#multisearchbtn").on("click", function () {
    currentPage = "search"
    const multiInput = document.querySelector('multi-input');
    getRecipes(multiInput.getValues());

})

recipesList.on("click", '.imageid', function () {
    const ingID = $(this).closest(".card").find("li:first").text()
    alert("The First Ingredient for this Recipe is: " + ingID)
})

const getCheckedCategories = () => {
    const checkedCategories = []

    for (let category of categories) {
        if ($("#" + category).prop("checked"))
            checkedCategories.push(category)
    }
    return checkedCategories
}

const getFavRecipes = () => {
    apiManager.getFavRecipes()
        .then(function (data) {
            console.log(data)
            render.renderRecipes(data)
        })
}

const markedRecipes = []

recipesList.on("click", ".bookmarkIcon", function () {
    const recipeId = $(this).data('id');

    if ($(this).data('check')) {
        console.log(currentPage)
        if (currentPage == "favorite") {
            $(this).closest(".card").remove();
        }
        $(this).data('check', false)
        $(this).removeClass('favorite')
        apiManager.deleteFavRecipes(recipeId)
    }
    else {
        $(this).data('check', true)
        $(this).addClass('favorite')
        apiManager.postFavRecipes(recipeId)
    }
    console.log(markedRecipes)
    return markedRecipes;
});


$("#favoritebtn").on("click", function () {
    currentPage = "favorite"

    isClikcked =true
    getFavRecipes()
})