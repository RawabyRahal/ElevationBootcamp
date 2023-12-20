const enumType = require('./consts')

function handleComplaint(complaint) {

    if (complaint.type === enumType.FINANCE)
        console.log("Money doesn’t grow on trees, you know.")

    if (complaint.type === enumType.WEATHER)
        console.log("It is the way of nature. Not much to be done.")

    if (complaint.type === enumType.EMOTIONS)
        console.log("It’ll pass, as all things do, with time.")
}

module.exports = handleComplaint;