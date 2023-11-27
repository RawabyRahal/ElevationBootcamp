const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    const pow = function(x, y){
        return x * y
    }

    const sub = function(x, y){ // private 
        return x - y
    }
    return {a:add , b:pow} // there are no --> c:sub <---  here
}


 const math = mathOperations()

console.log(math.a(1,2))