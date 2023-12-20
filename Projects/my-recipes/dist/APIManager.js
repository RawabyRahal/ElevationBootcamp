class APIManager {
    constructor() {
        // this.data = {}
    }

    getAllData(ingredient, gluten, dairy, categories) {
       return $.get(`/recipes/${ingredient}?dairy=${dairy}&gluten=${gluten}&categories=${JSON.stringify(categories)}`)
    }
}