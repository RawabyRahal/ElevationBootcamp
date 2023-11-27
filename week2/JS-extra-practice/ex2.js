function hasNestedProperty(obj, key) {
    let user = Object.keys(obj)
    console.log("/////   " + user)

    let k = key.split('.')
    console.log("^^^^^   " + k)

    if(user.hasOwnProperty(k)){
        
        console.log("$$$$  ")
    }


    // for (let o of user) {
    //     console.log("%%%%  " + o)
    //     console.log(k.hasOwnProperty(o))
    //     console.log("Holaaaa")


    // }


}
// Test the function with
console.log(hasNestedProperty({ user: { name: 'Bob', age: 30 }, age: {}, year: {} }, 'user.name')); // Should return true