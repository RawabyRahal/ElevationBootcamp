//Q1
function isEven(number){
    if(number % 2 === 0){
        return true
    }
    else{return false}
}

console.log(isEven(10))
console.log(isEven(5))

// //Q2
function oddNumbers(numberArr){
    for(let num in numberArr){
        if(!isEven(numberArr[num]))
            console.log(numberArr[num] + " is Odd")
    }
}

const numberArr = [10, 15, 30, 2, 33, 64, 50];
oddNumbers(numberArr);


//Q3
function checkExists(numArr , num2){
    for(let num3 in numArr){
        if(numArr[num3] === num2) {
            return true
        }
    }
    return false
}

const numArr = [1, 2, 3];
const num2 = 2;
console.log(checkExists(numArr , num2))