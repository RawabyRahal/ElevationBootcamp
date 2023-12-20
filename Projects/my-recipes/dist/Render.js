const source = recipesTemplate.html()
const templateRecipes = Handlebars.compile(source)

const sourceCategories = $("#categories-template").html()
const templateCategories = Handlebars.compile(sourceCategories)


class Renderer {
    constructor() {
        this.renderCategories()
    }
    
    renderData = function (data) {
        recipesList.empty()

        let newHtml = templateRecipes({ recipes: data })
        recipesList.append(newHtml)
    }

    renderError = function () {
        recipesList.empty()
        recipesList.append("<div class='notfound' style='color: red; text-align:center'>The searched ingredient could not be found.</div>");
    }

    renderCategories = function(){
        let newHtml = templateCategories({categories})
        $("#categories").append(newHtml)
    }
}

