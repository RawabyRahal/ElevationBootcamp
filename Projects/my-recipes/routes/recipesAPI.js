// Import required module
const express = require('express')
const router = express.Router()
const axios = require('axios');
const consts = require('../consts');
const {
    createRecipes,
    filterData,
    filterRecipesByCategory,
    filterRecipesByIngredinets
} = require('./recipes')


const dairyIngredients = consts.dairyIngredients
const glutenIngredients = consts.glutenIngredients

const RECIPE_API = consts.RECIPE_API

// let page = 1;
const limit = 3;

// Retrieve data
router.get('/:ingredient', function (req, res) {

    let ingredient = req.params.ingredient

    let ingredientsList = JSON.parse(req.query.ingredients || "[]")
    let glutenfree = req.query.gluten
    let dairyfree = req.query.dairy
    let selectedCategory = JSON.parse(req.query.categories || "[]")
    let page = req.query.page
    
    const recipePromise = axios.get(RECIPE_API + ingredient)
    const giphyPromise = axios.get(`https://api.giphy.com/v1/gifs/search?api_key=ajZFNBnAjLpEAIaJkhqVhTwdqPDPDELc&q=food&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)

    Promise.all([recipePromise, giphyPromise])
        .then(function (response) {

            // let recipes = response.data.results
            let recipes = response[0].data.results
            let gif = response[1]

            if (glutenfree == 'true') {
                recipes = filterData(recipes, glutenIngredients)
            }
            if (dairyfree == 'true') {
                recipes = filterData(recipes, dairyIngredients)
            }
            if (selectedCategory.length) {
                recipes = filterRecipesByCategory(recipes, selectedCategory)
            }
            recipes = filterRecipesByIngredinets(recipes, ingredientsList)

            console.log("Someone's trying to make a GET request")

            if (response[0].data.results.length == 0) {
                const error = { error: "try again!" }
                res.status(404).send(error)
            }
            else {
                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;
                page++
                
                recipes = createRecipes(recipes, gif)
                // console.log(recipes.map(rec => rec.title))
                const pagesResult = recipes.slice(startIndex, endIndex)
                // console.log(pagesResult.map(rec => rec.title))
                res.status(200).send(pagesResult)
            }
        });
})


module.exports = router

// app.get("/items/:id", (req, res)=>{
//     if (!req.params.id){
//         return res.status(404).send("Item not found")
//     } else {
//         return res.send("ID OK") // will return status 200, the default one
//     }
// })