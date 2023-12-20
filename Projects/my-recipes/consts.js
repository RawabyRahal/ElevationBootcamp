// TODO - consts for backend
// like array

const RECIPE_API = `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/`

const dairyIngredients = [
    "Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"
]
const glutenIngredients = [
    "Flour", "Bread", "spaghetti", "Biscuits", "Beer"
]

const areaToCountryMapping = {
    'italian': 'Italy',
    'jamaican': 'Jamaica',
    'french': 'France',
    'british': 'United Kingdom',
    'american': 'United States',
    'thai': 'Thailand',
    'irish': 'Ireland',
    'chinese': 'China',
    'mexican': 'Mexico',
    'canadian': 'Canada',
    'indian': 'India',
};

const countryCodes = {
    'italian': 'it',
    'jamaican': 'jm',
    'french': 'fr',
    'british': 'gb',
    'american': 'us',
    'thai': 'th',
    'irish': 'ie',
    'chinese': 'cn',
    'mexican': 'mx',
    'canadian': 'ca',
    'indian': 'in',
};

const categories = [
    "Vegetarian", "Chicken", "Miscellaneous", "Beef", "Seafood", "Pork", "Dessert"
]

module.exports.dairyIngredients = dairyIngredients
module.exports.glutenIngredients = glutenIngredients
module.exports.areaToCountryMapping = areaToCountryMapping
module.exports.countryCodes = countryCodes
module.exports.categories = categories
module.exports.RECIPE_API = RECIPE_API