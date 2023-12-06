class Animal {
    constructor(name, numLegs, children ) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name){
        children.push(name)
    }
}

cosnt cat = new Animal()
cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿