function createNestedObject(obj) {
    let arr = []
    // obj.split('.')
    arr.push(obj)
    console.log(obj)

    arr.split(',')
    console.log(obj)

}
// Test the function with
console.log(createNestedObject({ 'user.name': 'Alice', 'user.age': 25 })); // Should return { user: { name: 'Alice', age: 25 } }