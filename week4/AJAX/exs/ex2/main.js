const fetchData = (queryType, queryValue) => {
    if (queryType == "isbn") {
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`,
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }
    if(queryType === "title"){
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=title:${queryValue}`,
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }
}

fetchData("isbn", 9789814561778)
fetchData("title", "How to Win Friends and Influence People")