const StringFormatter = function () {

    const capitalizeFirst = string => console.log("The proper capitalization for " + string + " is: " + string[0].toUpperCase() + string.substring(1).toLowerCase())


    const toSkewerCase = string => {
        let str = string.replace(' ', '-')
        console.log(str)
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase

    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box