class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }

    giveBirth(name){
        console.log("Boom. Birthed " + name)
    }
}

const Dog = new Animal("Husky" , 4)
console.log("dog's name: " Dog.name);

const cat = new Animal("Puss", 4)
cat.giveBirth("Dolly") // prints "Boom. Birthed Dolly"