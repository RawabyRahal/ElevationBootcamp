const fetchData = ()=> {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function (data) {
            console.log(data);
        },
        // is this (xhr, text, error) like constructor?
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}