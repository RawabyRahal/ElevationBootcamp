const CatchFrog = function () {

    const _frogs = [{
        id: "1",
        url: "frog.jpg",
    }]

    const geFrogs = function () {
        return (_frogs)
    }
    const removeFrog = function (frogID) {
        for (let i in _frogs) {
            if (_frogs[i].id === frogID) {
                _frogs.splice(i, ONE);
            }
        }
    }
    return {
        removeFrog: removeFrog,
    }
}
