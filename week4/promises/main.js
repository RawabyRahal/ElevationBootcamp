// console.log("before setTimeout")
// setTimeout(function () {
//     console.log("in the callback")
// }, 1000)
// console.log("after setTimeout")



// const getRandomWord = function () {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']

//     // using setTimeout to simulate an async operation that takes time
//     setTimeout(() => {
//         return words[Math.floor(Math.random() * words.length)]
//     }, 1000);
// }
// console.log(getRandomWord());



const getRandomWord = function (callback) {
    let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
    setTimeout(() => {
        callback(words[Math.floor(Math.random() * words.length)])
    }, 1000);
}


getRandomWord((randomWord)=> {
    console.log(randomWord);
})
