let boughtTesla = true
const yearOfTeslaPurchase = 2017
let isUSCitizen = false
let currentYear = 2018
let years = currentYear - yearOfTeslaPurchase

if(boughtTesla && isUSCitizen){
    console.log(years);
    if(years >= 4 ){
        console.log('Would you like an upgrade?')
    }
    else console.log('Are you satisfied with the car')
}

if(!isUSCitizen && boughtTesla){
    console.log('Would you like to move to the US')

}

if(!boughtTesla){
    console.log('Are you interested in buying Tesla?')
}
