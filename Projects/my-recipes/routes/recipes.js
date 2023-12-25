const consts = require('../consts');
const { faker } = require('@faker-js/faker');
const axios = require('axios');

const areaToCountryMapping = consts.areaToCountryMapping
const countryCodes = consts.countryCodes

const favoriteRecipes = {}

function addFavRecipe(id){
    favoriteRecipes[id] = true
}

function getFavRecipe(){
    const promises = []

    for (let fav of Object.keys(favoriteRecipes)) {
        promises.push(axios.get(`https://recipes-goodness-elevation.herokuapp.com/recipes/id/${fav}`)
            .then(function (response) {
                let favRecipes = response.data
                console.log(favRecipes)
                return response.data
            })
        )
    }
    return Promise.all(promises).then(favRecipes => {
        return createRecipes(favRecipes)
    })
}

function deleteFavRecipe(id){
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

const createRecipes = (data) => {

    const dataMap = data.map(item => ({
        idMeal: item.idMeal,
        ingredients: item.ingredients,
        title: item.title,
        thumbnail: item.thumbnail,
        href: item.href,
        category: item.strCategory,
        area: areaToCountryMapping[item.strArea.toLowerCase()],
        countryCode: countryCodes[item.strArea.toLowerCase()],
        chefName: faker.name.firstName() + " " + faker.name.lastName(),
        rating: faker.number.int({ min: 1, max: 5 }),
        instruction:item.strInstructions,
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