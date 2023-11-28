const PIC_URL = "cat.jpg"
const pictureModule = function(){
    const pictures = [
        {picSrc :PIC_URL, name : "Bunny"}
    ]

    const addNewPic = function(name){
        pictures.push({picSrc:PIC_URL,name})
    }

    const getPictures = function(){
        return pictures
    }

    return {addNewPic,getPictures}
}




