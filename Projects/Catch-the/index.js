$(document).ready(function () {

    $("#startGameButton").on("click", function () {
        sessionStorage.setItem('startGameFlag', 'true');
        window.location.href = 'view.html?start=true';
    });
});
