
let words;
let book;

const promiseWords = $.get('https://random-word-api.herokuapp.com/all', function (wordsData) {

    words = wordsData[Math.floor(Math.random() * wordsData.length)]

    const promiseBooks = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${words}`, function (wordsData) {
    }).then((word) => {
        console.log(words)
        console.log(word)
        for (let i in word.items) {
            if (word.items[i].volumeInfo.title) {
                console.log('Book Title:', word.items[i].volumeInfo.title);
            }
        }
    })
    .catch(error => console.log(error))
})



