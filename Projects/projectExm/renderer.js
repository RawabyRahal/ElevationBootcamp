const rendererModule = function(){
    const container = $("#container")
    const render = function(arrOfPics){
        container.empty()
        for(pic of arrOfPics){
            container.append(`<h1>${pic.name}</h1>`)
            container.append(`<img width=300px height=300px src=${pic.picSrc}>`)
        }
    }
    return {render}
}

