function countProperties(obj) {
    let count = 0
    for (let o in obj) {
        count++
    }
    console.log("prooerties number are: " + count + ", which are " + Object.keys(obj))
}
// Test the function with
console.log(countProperties({ name: 'Alice', age: 25 })); // Should return 2