function isPalindromeDate() {
    let d = new Date()

    let day = d.getDate().toString()
    let month = (d.getMonth()+1).toString()

    const concat = day + month
    console.log('Today is: ' + d.toLocaleString() + " day " + day + " month " + month + " the concat of day and month is " + concat);

    for(let i in concat){
        if(concat[i] !== concat[concat.length-1]){
            console.log("the date is NOT Palindrome")
       break;
        }
        else{
        console.log ("the date is Palindrome")
        }
    }
}

isPalindromeDate()