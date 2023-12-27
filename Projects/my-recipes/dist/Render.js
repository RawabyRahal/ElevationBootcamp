const source = recipesTemplate.html()
const templateRecipes = Handlebars.compile(source)

const sourceCategories = categoriesTemplate.html()
const templateCategories = Handlebars.compile(sourceCategories)

const sourceMultiInput = multiInputTemplate.html();
const templateIngredients = Handlebars.compile(sourceMultiInput);

Handlebars.registerHelper('times', function(n, block) {
    var html = "";
    let litStarClass = 'style="color: orange;"';
    for(let i = 1; i <= 5; ++i) {
        if(i > n) {
            litStarClass = 'style="color: grey;"';
        }
        html += `<i class="fa-solid fa-star" ${litStarClass}></i>`;
    }
    return html
});


class Renderer {
    constructor() {
        this.renderCategories()
        this.renderMultiInput();
    }

    renderRecipes = function (data) {
        recipesList.empty()
        let newHtml = templateRecipes({ recipes: data })
        recipesList.append(newHtml)
    }

    renderError = function () {
        recipesList.empty()
        recipesList.append("<div class='notfound' style='color: red; text-align:center'>The searched ingredient could not be found.</div>");
    }

    renderCategories = function () {
        let newHtml = templateCategories({ categories })
        categoriesList.append(newHtml)
    }

    renderMultiInput = function () {
        let newHtml = templateIngredients({ ingredients })
        ingredient.append(newHtml)
    }
}

