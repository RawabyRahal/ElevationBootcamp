const fetchData = () => {
    const queryValue = $('#name').val();

    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=ajZFNBnAjLpEAIaJkhqVhTwdqPDPDELc&q=${queryValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
        // success: fetchData,
        error: function (xhr, text, error) {
            console.log(text);
        }
    }).then(gif => {
        console.log(gif)
        $("#gififrame").attr("src" , gif.data[0].embed_url)
    })
}

$("#searchbtn").on('click' , function(){
    fetchData()
})


