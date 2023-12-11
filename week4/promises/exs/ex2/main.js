
let words;

const getRandomBookTitle = (volume) => {
    if (!volume.items)
        return "No Books Found :(";
    const randomIndex = Math.floor(Math.random() * volume.items.length);
    return volume.items[randomIndex].volumeInfo.title;
}



const promiseWords = $.get('https://random-word-api.herokuapp.com/all', function (wordsData) {

    words = wordsData[Math.floor(Math.random() * wordsData.length)]


    const promiseBooks = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${words}`)


    const promiseGIFs = $.get(`https://api.giphy.com/v1/gifs/search?q=${words}&api_key=ajZFNBnAjLpEAIaJkhqVhTwdqPDPDELc`)

    console.log(promiseBooks)
    console.log(promiseGIFs)

    Promise.all([promiseBooks, promiseGIFs]).then((data) => {
        const bookTitle = getRandomBookTitle(data[0])
        $("body").append(bookTitle)

        $("body").append($("<br><br><img src =" + data[1].data[0].images.original.url + ">"))
    })
})


