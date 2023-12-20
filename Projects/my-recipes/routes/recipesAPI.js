// Import required module
const express = require('express')
const router = express.Router()
const axios = require('axios');
const consts = require('../consts');

const dairyIngredients = consts.dairyIngredients
const glutenIngredients = consts.glutenIngredients
const areaToCountryMapping = consts.areaToCountryMapping
const countryCodes = consts.countryCodes
const RECIPE_API = consts.RECIPE_API


const filterData = (recipes, filteredIngredients) => {
    return recipes.filter(recipe => !recipe.ingredients
        .find(ingredient => filteredIngredients.includes(ingredient)))
}

const filterRecipesByCategory = (recipes, categories) => {
    return recipes.filter(recipe => categories.includes(recipe.strCategory));
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
        countryCode: countryCodes[item.strArea.toLowerCase()]
    }));

    return dataMap
}

// Retrieve data
router.get('/:ingredient', function (req, res) {

    let ingredient = req.params.ingredient
    let glutenfree = req.query.gluten
    let dairyfree = req.query.dairy
    let selectedCategory = JSON.parse(req.query.categories)

    axios.get(RECIPE_API+ingredient)
        .then(function (response) {

            let recipes = response.data.results

            if (glutenfree == 'true') {
                recipes = filterData(recipes, glutenIngredients)
            }
            if (dairyfree == 'true') {
                recipes = filterData(recipes, dairyIngredients)
            }
            if (selectedCategory.length) {
                recipes = filterRecipesByCategory(recipes, selectedCategory)
            }
            console.log("Someone's trying to make a GET request")

            if (response.data.results.length == 0) {
                const error = { error: "try again!" }
                res.status(404).send(error)
            }
            else {
                // console.log(recipes.map(rec => rec.title))
                recipes = createRecipes(recipes)
                res.status(200).send(recipes)
            }
        });
})


module.exports = router