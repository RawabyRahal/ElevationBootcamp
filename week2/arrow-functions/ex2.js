const returnTime = function (time) {
    const date = new Date()
    console.log('The current time is: ' + date)
}

const getTime = function(date){
    returnTime()
}

getTime(returnTime)