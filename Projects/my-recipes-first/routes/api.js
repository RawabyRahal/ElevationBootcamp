// Import required module
const express = require('express')
const router = express.Router()
const axios = require('axios');

const dairyIngredients = [
    "Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"
]
const glutenIngredients = [
    "Flour", "Bread", "spaghetti", "Biscuits", "Beer"
]


const filterData = (recipes , filteredIngredients) => {
    return recipes.filter(recipe => !recipe.ingredients
        .find(ingredient => filteredIngredients.includes(ingredient)))
}

const createRecipes = (data) => {

    const dataMap = data.map(item => ({
        idMeal: item.idMeal,
        ingredients: item.ingredients,
        title: item.title,
        thumbnail: item.thumbnail,
        href: item.href,
    }));

    return dataMap
}

// Retrieve data
router.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    let glutenfree = req.query.gluten
    let dairyfree = req.query.dairy

    axios.get(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}`)
        .then(function (response) {

            let recipes = response.data.results
            // if (glutenfree == 'true'){}
            // if(dairyfree == 'true'){}
            if (glutenfree == 'true' && dairyfree == 'false') {
                recipes = filterData(recipes , glutenIngredients)
            }

            console.log(dairyfree)
            if(dairyfree == 'true' && glutenfree == 'false'){
                recipes = filterData(recipes, dairyIngredients)
            }
            if(dairyfree == 'true' && glutenfree == 'true'){
                let recipesG = filterData(recipes , glutenIngredients)
                recipes = filterData(recipesG, dairyIngredients)
            }
            else{
                recipes
            }
            console.log("Someone's trying to make a GET request")

            if (response.data.results.length == 0) {
                res.send("TRY AGAIN!")
            }
            else {
                // console.log(recipes.map(rec => rec.title))
                recipes = createRecipes(recipes)
                res.send(recipes)
            }
        });
})

// GultenFree
// router.get('/recipes/ingredient', (request, res) => {
//     let params = request.query.gluten
//     // console.log(params)
//     axios.get(`https://recipes-goodness-elevation.herokuapp.com/recipes`)
//         .then(function (response) {
//             console.log(response.data.results)
//             if (response.data.results.length == 0) {
//                 res.send("TRY AGAIN - Gluten Free!")
//             }
//             else {
//                 //filtering data by gluten
//                 let filteredData = !filterDataByGluten(response.data.results)
//                 res.send(filteredData)
//             }
//         })
// })



module.exports = router