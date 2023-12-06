const catchfrog = CatchFrog()
const gameRenderer = Renderer();

renderer.renderFrogs(catchfrog.getFrogs())

$("#space").on("click", function () {
    const frogId = $(this).attr('id')
    catchfrog.removePost(frogId)
    renderer.renderFrogs(catchfrog.getFrogs())
})
