function updateProperty(obj, key, value) {

    if(obj.hasOwnProperty(key)){
        obj[key] = value
    }
    console.log(obj)
}
// Test the function with
console.log(updateProperty({ name: 'Alice' }, 'name', 'Bob')); // Should change name to Bob