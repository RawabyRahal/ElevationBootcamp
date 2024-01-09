const fetchDatum = async function () {
    let data = await $.get(API_URL)
    console.log(data.items[0])
}

// spotCheck1
// const fetchData = function (surname) {
//     Person.find({ lastName: surname }, function (err, people) {
//         console.log(people)
//     })
// }
const fetchData = async function (surname) {
    const person = await Person.find({ lastName: surname })
    console.log(person)
}

fetchData("Rahal")