class APIManager {
    fetch() {
        return $.get('/data')
    }
}

class Renderer {
    render(dataPromise) {
        dataPromise.then(function (data) {
            $("#body").append(`<div>${data}</div>`)
        })
    }
}

const apiManager = new APIManager()
const renderer = new Renderer()

let initialDataPromise = apiManager.fetch()
renderer.render(initialDataPromise) //initial page load

$(".some-thing").on("click", function () {
    let newDataPromise = apiManager.fetch()
    renderer.render(newDataPromise)
})