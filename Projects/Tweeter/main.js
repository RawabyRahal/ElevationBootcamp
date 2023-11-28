const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

// add eventlistener to tweeter btn

$("#post").on("click",function(){
    const tweet = $("#input").val()
    tweeter.addPost(tweet)
    // console.log("$$$ "+this)
    renderer.renderPosts(tweeter.getPosts())
})


// alert($(this).attr('id').slice(3)); 

// Add comment
$("#posts").on("click",'.commentbtn',function(){
    const postId = $(this).attr('id').slice(3)// btrp1
    const comment = $("#input" + postId).val()
    tweeter.addComment(comment, postId)
    renderer.renderPosts(tweeter.getPosts())
})

// Delete Post
$("#posts").on("click", '.delete',function(){
    const postId = $(this).attr('id').slice(3)
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

// Delete comment
$("#posts").on("click", '.delete-comment',function(){
    
    const postId = $(this).closest(".post").attr('id')
    const commentId = $(this).closest(".comments").attr('id')

    tweeter.removeComment(postId , commentId)
    renderer.renderPosts(tweeter.getPosts())
})