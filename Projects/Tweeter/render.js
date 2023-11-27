const _posts =
    [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

const Renderer = function () {

    const renderPosts = function (posts) {
        $('#posts').innerHTML = ''
        for (let p of posts) {
            console.log(p.text)
            let divPost = $("<br><div class= 'post' id=" + p.id +'>' + p.text + "</div><br>")
            $('#posts').append(divPost)

            for(let c of p.comments){
                let divComment = $("<div calss='post-text'>").text(c.text)
                $('#' + p.id).append(divComment)
            }
        }
    }

    return { renderPosts: renderPosts }
}

const render = Renderer()

render.renderPosts(_posts)
