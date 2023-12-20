const validator = require('validator')
const { faker }  = require('@faker-js/faker')
// console.log(validator)


//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
// console.log(`${validator.isEmail("shoobert@dylan")}`)


// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// console.log(`${validator.isMobilePhone("786-329-9958", "en-US")}`)


// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"

// console.log(`${validator.blacklist("I'M SO EXCITED!!!~!", blacklist)}`)


function makeHuman(number) {
    const people = []

    for(let i= 0 ; i < number ; i++){
        const user = {
              name: faker.name.firstName() + " " + faker.name.lastName(),
              avatar: faker.image.avatar(),
              company : faker.company.name()
        }
        people.push(user)
    }
    return people
}

console.log(makeHuman(3))