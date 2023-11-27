let person = {
    name: 'John',
    birthYear: 1990
};

function calculateAge(obj) {
    let bd = new Date().getFullYear() - obj.birthYear
    console.log("ur age is: " + bd) 
}
// Test the function with
console.log(calculateAge(person)); // Should return age