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
        $('#posts').empty()
        $('#posts').innerHTML = ''

        for (let p of posts) {
            console.log(p.text)
            let divPost = $("<br><div class= 'post' id=" + p.id + '>' + "<div class= 'post-text'>" + p.text + "</div></div><br>")
            $('#posts').append(divPost)
            $("#posts").val('')
            

            for (let c of p.comments) {
                const deletX = "<span class= delete-comment >x</span>"
                // <input type="text" placeholder="What's on your mind?" id="input">
                let divComment = $("<div class= 'comments'  id=" +c.id +">" + deletX + " " + c.text + "</div>")
                $('#' + p.id).append(divComment)
            }

            const newtext = "<input  id =input"+p.id + " placeholder= comment? calss = 'text'>"
            const newbtn = "<button id=btn"+p.id+" class='commentbtn'>comment</button>"
            $("#" + p.id).append(newtext)
            $("#" + p.id).append(newbtn)
            const delBtn = "<br><br><button id=del"+p.id+" class = delete>Delete Post</button>"
            $("#" + p.id).append(delBtn)
        }
    }


    return { renderPosts: renderPosts }
}

