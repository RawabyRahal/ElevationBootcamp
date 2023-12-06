const Renderer = function () {
    let level = 0;
    let timer = 10;

    const renderFrogs = function () {
        const startGame = function () {
            const startGameFlag = sessionStorage.getItem('startGameFlag');

            if (startGameFlag === 'true') {
                sessionStorage.removeItem('startGameFlag');
            }
            startTimer(timer);
            level++;
            $('#levelDisplay').text(level);
            generateFrogs();
        };

        const startTimer = function (seconds) {
            let remainingTime = seconds;
            $('.time').text(`${remainingTime} Seconds left`);

            const timerInterval = setInterval(function () {
                remainingTime--;

                if (remainingTime < 0) {
                    clearInterval(timerInterval);
                    // alert('Game Over! You lost :(');  ==> I've to deal with the alert
                    startGame();
                } else {
                    $('.time').text(`${remainingTime} Seconds left`);
                }
            }, 1000);
        };

        const generateFrogs = function () {
            $('#space').empty();
            const frogContainer = $('#space');

            const frog = $('<div class="frog"><img src="frog.jpg" height="50" width="50"></div>');

            const position = getRandomPosition();
            frog.css({
                left: position.x,
                top: position.y,
            });

            frogContainer.append(frog);

            frog.on('click', function () {
                $(this).remove();
                updateFrogsLeft();
            });

            for (let i = 1; i < level; i++) {
                const additionalFrog = $('<div class="frog"><img src="frog.jpg" height="50" width="50"></div>');

                // const additionalFrog = $('<div class="frog"><i class="fas fa-frog"height="50" width="50"></i></div>');


                const additionalPosition = getRandomPosition();
                additionalFrog.css({
                    left: additionalPosition.x,
                    top: additionalPosition.y,
                });

                frogContainer.append(additionalFrog);


                additionalFrog.on('click', function () {
                    $(this).remove();
                    updateFrogsLeft();
                });
            }
        };

        const getRandomPosition = function () {
            const containerWidth = $('#space').width();
            const containerHeight = $('#space').height();

            const maxX = containerWidth;
            const maxY = containerHeight;

            const randomX = Math.random();
            const randomY = Math.random();

            return { x: randomX, y: randomY };
        };

        const updateFrogsLeft = function () {
            const frogsLeft = $('.frog').length;
            $('#frogsLeftDisplay').text(frogsLeft);

            if (frogsLeft === 0) {
                startGame();
            }
        };

        $('#frogsLeftDisplay').text(level);
        $('#levelDisplay').text(level);

        startGame();

        return {
            renderFrogs: renderFrogs
        };
    };
}

