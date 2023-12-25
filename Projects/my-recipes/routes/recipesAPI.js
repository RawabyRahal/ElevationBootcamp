// Import required module
const express = require('express')
const router = express.Router()
const axios = require('axios');
const consts = require('../consts');
const {createRecipes, filterData, filterRecipesByCategory, filterRecipesByIngredinets} = require('./recipes')

const dairyIngredients = consts.dairyIngredients
const glutenIngredients = consts.glutenIngredients

const RECIPE_API = consts.RECIPE_API

// Retrieve data
router.get('/:ingredient', function (req, res) {

    let ingredient = req.params.ingredient

    let ingredientsList = JSON.parse(req.query.ingredients || "[]")
    let glutenfree = req.query.gluten
    let dairyfree = req.query.dairy
    let selectedCategory = JSON.parse(req.query.categories || "[]")

    axios.get(RECIPE_API + ingredient)
        .then(function (response) {

            let recipes = response.data.results
            // console.log(recipes)

            if (glutenfree == 'true') {
                recipes = filterData(recipes, glutenIngredients)
            }
            if (dairyfree == 'true') {
                recipes = filterData(recipes, dairyIngredients)
            }
            if (selectedCategory.length) {
                recipes = filterRecipesByCategory(recipes, selectedCategory)
            }
            recipes = filterRecipesByIngredinets(recipes , ingredientsList)

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