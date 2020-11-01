window.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.9) 450px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));


    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 70px, rgba(0, 0, 0, 1) 100px)';

        updateSpotlight(e)

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.9) 450px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }
});

$(document).ready(function () {
    $(".box").on("mousedown", function () {
        $(".jpg").attr("src", "img/2.png");
    })
    $(".box").on("mouseup", function () {
        $(".jpg").attr("src", "img/1.jpg");
    })
})



