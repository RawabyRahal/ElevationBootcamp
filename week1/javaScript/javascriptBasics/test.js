console.log('hello world!');

// console.log((5 > 2) && false)
// console.log(!("knife" === "sword"))
// console.log((1 < 2) || (-1 > -1) || !false)
// console.log("")
// console.log((31 % 5) == "1")
// console.log(!!true)
// console.log("5th Avenue" != "5th Avenue")
// console.log(52 !== "52")
// console.log((undefined || null))


// let username = prompt("What is your username?")

// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// const firstCompany = companies[0]
// console.log(firstCompany) // prints "Tesla"
// companies.push("Blizzard Entertainment");
// companies.push(...firstCompany)
// // employees.push(candidates[0], candidates[1], candidates[2])
// console.log(companies)
// companies.splice(1, 1)
// console.log('*** ' + companies)

// let person = {
//     name: "Mariah",
//     occupation: "Gangster"
//   }

//   console.log(person.occupation) // prints "Gangster"

let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(let companyIndex in companies){
    console.log(companies[companyIndex])
  }

  for(let company of companies){
    console.log(company)
  }