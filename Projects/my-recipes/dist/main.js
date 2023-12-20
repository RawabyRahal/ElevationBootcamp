const apiManager = new APIManager()
const render = new Renderer()

$("#searchbtn").on("click", function () {

    const ingredient = searchedIngredient.val()
    const gluten = isGlutenFree.prop("checked");
    const dairy = isDairyFree.prop("checked");

    apiManager.getAllData(ingredient, gluten, dairy, getCheckedCategories()).then(function (data) {
        console.log(data)

        render.renderData(data)

    }).catch(function (error) {
        console.error(error.responseJSON.error)
        render.renderError()
    })
})


recipesList.on("click", '.imageid', function () {
    const ingID = $(this).closest(".card").find("li:first").text()
    alert("The First Ingredient for this Recipe is: " + ingID)
})

const getCheckedCategories = () =>{
    const checkedCategories = []

    for(let category of categories){
        if($("#"+category).prop("checked"))
        checkedCategories.push(category)
    }
    console.log(checkedCategories)
    return checkedCategories
}