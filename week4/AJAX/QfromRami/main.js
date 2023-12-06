// $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", function(result){
//     console.log(result.length)
// })

//  What is the type of the 19th Person’s first pet?
// $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", function(result){
//     console.log(result[19].family.pets[0].breed.type)
// })


const callback = function (people) {
    for (let i in people) {
        console.log(people[i].name.first == "Rebeccar")
    }
}

$.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", callback)

