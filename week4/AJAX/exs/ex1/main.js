const fetchData = (ISBN) => {

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetchData(9789814561778)