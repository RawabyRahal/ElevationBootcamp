const addPicBtn = $("#addPic")
const nameInput = $("#nameInput")

const picModule = pictureModule()
const renModule = rendererModule()

renModule.render(picModule.getPictures())

//add picture action
addPicBtn.on("click",function(){
    const name = nameInput.val()
    picModule.addNewPic(name)
    renModule.render(picModule.getPictures())
    console.log(this)
})

$("#container").on("click","img",function(){
    console.log(this)
    alert("meow!")
})