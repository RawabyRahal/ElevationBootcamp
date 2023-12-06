
const fetchData = (data) => {
    // for(let book in data)
    console.log(data)
    console.log(data.items[0].volumeInfo.title+ " " + data.items[0].volumeInfo.authors+" " + data.items[0].volumeInfo.industryIdentifiers[0].type)
}

$.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: fetchData,
    error: function (xhr, text, error) {
        console.log(text);
    }
});

