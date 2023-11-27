// Create an arrow function called capitalize that receives any string, and
//  returns it with proper capitalization:

const capitalize = (string) => {
    let i=0;
    console.log("The proper capitalization for " + string + " is: " + string[0].toUpperCase() + string.substring(1).toLowerCase())
}


capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia