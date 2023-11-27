const mathOperations = function () {
    const add = function (x, y) {
        console.log(x + y)
        return(x + y)
    }

    const subtract = function (x, y) {
        console.log( x - y);
        return(x - y);
    }

    const multiply = function (x, y) {
        console.log (x * y);
        return(x * y);
    }

    const divide = function (x, y) {
        console.log( x / y);
        return( x / y);
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const math = mathOperations()
math.add(5,10)
math.add(13 , 29)
math.mult(1.75 , 24)
//7*36/6
math.mult(7 , math.div(36 , 6));//it returns NaN, WHY!!!