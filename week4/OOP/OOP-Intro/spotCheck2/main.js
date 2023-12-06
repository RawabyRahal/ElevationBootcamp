class Human  {
    // regarding age => should we got it as age or birthday and then we calculat it?
    constructor(name, age, isFriendly ) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const h1 = new Human("Fares" , 50 , true)
console.log('Name: ' + h1.name + "age: " + h1.age + " and u r " + h1.isFriendly);