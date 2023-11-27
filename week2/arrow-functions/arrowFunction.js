const square = number => {
    console.log("the result is: " + number * number)
}

square(4) // should print 16


const add = (x, y) => {
    return x + y
}
const sum = add(1, 2)
console.log("The sum is: " + sum) //prints 3


const add2 = (x, y) => x + y
const sum2 = add(1, 2)
console.log("The sum2 is: " + sum2) //prints 3


const getHypotenuse = (a, b) => {
    const aSquared = a * a
    const bSquared = b * b
    const cSquared = aSquared + bSquared
    return Math.sqrt(cSquared)
}

const hypoteneuese = getHypotenuse(3, 4)
console.log(hypoteneuese) //prints 5