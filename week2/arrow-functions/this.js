// fun fun 
const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {
        console.log("in dis method "+this.name) // El..
        setTimeout(function () {
             console.log("in setTime method "+this.name) // undefined
        }, 3000)

    }
}
//suspenseBuilder.displayName()


// fun ()=> 
const suspenseBuilder2 = {
    name: "El Mysterio",
    displayName: function () {
        console.log("in dis method "+this.name) // El..
        setTimeout( ()=> {
             console.log("in setTime method "+this.name) // El..
        }, 3000)

    }
}
//suspenseBuilder2.displayName()



// ()=> ()=> 
this["name"]="rawaby"
const suspenseBuilder3 = {
    name: "El Mysterio",
    displayName:  ()=> {
        console.log("in dis method "+this.name) // undefined or rawaby with line 30 
        setTimeout( ()=> {
             console.log("in setTime method "+this.name) // undefined or rawaby with line 30 
        }, 3000)

    }
}
suspenseBuilder3.displayName()