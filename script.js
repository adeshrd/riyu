window.onload = function () {

    $('body')
        .css('transition', 'background-color linear 3s')
        .css('background-color', '#2d1b55')
        .on('transitionend', function () {
            //$('#birthday-message').show().on('animationend', rest);
            $('.container').fadeIn('fast', start);
        });

    $('.loading').fadeOut('fast');
    //$('.container').fadeIn('fast', start);
}



var start = function () {

    setTimeout(() => {

        new TypeIt("#app", {
            speed: 200,
            loop: false,
            afterComplete: async (instance) => {
                $('#app .ti-cursor').remove()
                new TypeIt("#que", {
                    strings: "I wanted to <span style=\"color: #27ae60;\">wish</span> you...",
                    speed: 200,
                    loop: false,
                    afterComplete: wishBirthday
                })
                    .go()
            },
        })
            .type("Hi Riyu &#128075;")
            .break()
            .pause(500)
            .type("Today is an amazing day!")
            .go();


    }, 300);
}

var wishBirthday = function () {

    $('#messagePhase1').fadeOut('fast', function () {


        $('body')
            .css('transition', 'background-color linear 3s')
            .css('background-color', '#a27bcc')
            .on('transitionend', function () {
                //$('#birthday-message').show().on('animationend', rest);
                $('.cake').fadeIn('slow', function () {
                    $('#birthday-message').show()
                    showConfetti();
                });
            });
    });

}


// Function to show confetti
function showConfetti() {
    const confettiSettings = {
        target: 'confetti-canvas',
        respawn: true,
        colors: ['#ff0000', '#00ff00', '#0000ff'],
    };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    /*setTimeout(() => {
        confetti.clear();
    }, 5000);*/

}
  
