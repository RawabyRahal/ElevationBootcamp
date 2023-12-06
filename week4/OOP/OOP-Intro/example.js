class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"