const consts = require('../consts');
const { faker } = require('@faker-js/faker');
const axios = require('axios');

const areaToCountryMapping = consts.AREA_TO_COUNTRY_MAPPING
const countryCodes = consts.COUNTRY_CODES

const favoriteRecipes = {}

function addFavRecipe(id) {
    favoriteRecipes[id] = true
}

function getFavRecipe() {

    const promises = []
    let favRecipesIngredients
    let favRecipes
    // Object.keys => list of keys as a list
    for (let fav of Object.keys(favoriteRecipes)) {
        promises.push(axios.get(`https://recipes-goodness-elevation.herokuapp.com/recipes/id/${fav}`)
            .then(function (response) {

                // data => recipe obj
                favRecipes = response.data
                favRecipesIngredients = response.data.title
                console.log(favRecipesIngredients)

                return response.data
            })
        )
    }
    const giphyPromise = axios.get(`https://api.giphy.com/v1/gifs/search?api_key=ajZFNBnAjLpEAIaJkhqVhTwdqPDPDELc&q=${favRecipesIngredients}`)

    console.log("**************************************************")

    // for each id request return one recipe => one Proimse
    return Promise.all(promises.concat(giphyPromise)).then(function (response) {

        // let recipes = response.data.results
        // console.log(response)
        let recipes = response.slice(0, -1)
        let gif = response.pop()
        
        return createRecipes(recipes , gif)
    })
}

function deleteFavRecipe(id) {
    delete favoriteRecipes[id]
}

const filterData = (recipes, filteredIngredients) => {
    return recipes.filter(recipe => !recipe.ingredients
        .find(ingredient => filteredIngredients.includes(ingredient)))
}

const filterRecipesByCategory = (recipes, categories) => {
    return recipes.filter(recipe => categories.includes(recipe.strCategory));
}

const filterRecipesByIngredinets = (recipes, ingredients) => {
    console.log(ingredients)
    for (let i = 0; i < ingredients.length; i++) {
        recipes = recipes.filter(recipe => recipe.ingredients.includes(ingredients[i]))
    }
    return recipes
}

const createRecipes = (data, gif) => {

    const dataMap = data.map(item => ({
        idMeal: item.idMeal,
        ingredients: item.ingredients,
        title: item.title,
        // thumbnail: item.thumbnail,
        gif: gif.data.data[7].embed_url,
        href: item.href,
        category: item.strCategory,
        area: areaToCountryMapping[item.strArea.toLowerCase()],
        countryCode: countryCodes[item.strArea.toLowerCase()],
        chefName: faker.name.firstName() + " " + faker.name.lastName(),
        rating: faker.number.int({ min: 1, max: 5 }),
        instruction: item.strInstructions,
        favorite: favoriteRecipes[item.idMeal] !== undefined
    }));

    return dataMap
}

module.exports = {
    createRecipes,
    filterData,
    filterRecipesByCategory,
    filterRecipesByIngredinets,
    addFavRecipe,
    getFavRecipe,
    deleteFavRecipe
}