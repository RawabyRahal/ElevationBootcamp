const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const render = function () {
    for (let post of posts) {
        let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
        $("#timeline").append(postBox)
    }

}

$("#posts").on("click", function () {
    posts.push({
        name: $("#name").val(),
        text: $("#text").val()
    })
    $("#timeline").empty()
    render()
})
render()

// $("post").on("click", function () {
//     const name = $("input-name").val()
//     const text = $("input-text").val()
//     $("#timeline").append(newPost(name, text))
//     //where newPost is a funciton that creates a post html element with the given name and text
// })
