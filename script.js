window.onload = function () {

    $('body')
        .css('transition', 'background-color linear 3s')
        .css('background-color', '#6c5299')
        .on('transitionend', function () {
            //$('#birthday-message').show().on('animationend', rest);
            $('.container').fadeIn('fast', start);
        });

    $('.loading').fadeOut('fast');
    //$('.container').fadeIn('fast', start);
}

started = false;

var stringsTogether = [
    "Our moments...",
    "Our love...",
    "Our life...",
    "Our journey...",
    "Our memories...",
]

finalChapterStarted = false;
var finalChapter = function () {
    $('#more').remove()
    $('.cake').hide()
    $('#partner').hide()
    $('#birthday-message').hide()

    if (finalChapterStarted) return;
    finalChapterStarted = true;

    glideStarted = false


    var instance = new TypeIt("#memories", {
        //strings: stringsTogether,
        speed: 200,
        loop: true,
        startDelete: true,
        afterString: function () {
            if (!glideStarted) {
                $('.glide').fadeIn('fast');
                glideStarted = true;
                $('#more').hide()

                new Glide('.glide', {
                    type: 'slider',
                    autoplay: 4000,
                }).mount()
            }
        }
    })

    for (const str of stringsTogether) {
        instance.type(str).pause(200).delete(str.length);
    }

    instance.go()

}

var start = function () {
    if (started) return;
    started = true;

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

var wished = false;
var wishBirthday = function () {

    if (wished) return;
    wished = true;

    typed = false

    $('#messagePhase1').fadeOut('fast', function () {
        $('body')
            .css('transition', 'background-color linear 3s')
            .css('background-color', '#a27bcc')
            .on('transitionend', function () {
                if (!typed) {
                    typed = true;
                    $('#partner').show()
                    new TypeIt("#partner", {
                        speed: 200,
                        loop: false,
                        afterComplete: function () {
                            $('audio')[0].play();
                            $('#partner .ti-cursor').remove()
                            $('.cake').fadeIn('slow', function () {
                                $('#birthday-message').show()
                                showConfetti();
                                setTimeout(() => {
                                    confetti.clear();
                                    $('#confetti-canvas').hide()
                                    $('.cake').fadeOut()
                                    $('#partner').fadeOut('slow')
                                    $('#birthday-message').fadeOut('slow')

                                    $('body')
                                        .css('transition', 'background-color linear 3s')
                                        .css('background-color', '#6c5299')
                                        .on('transitionend', function () {
                                            $('#more').show().on('click', finalChapter)
                                        });
                                }, 4000);
                            });
                        }
                    })
                        .type("To my")
                        .pause(100)
                        .type(".")
                        .pause(100)
                        .type(".")
                        .pause(100)
                        .type(".")
                        .break()
                        .type("Precious wif")
                        .delete(3)
                        .type("Precious &#10084;&#65039;")
                        .go()
                }
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

    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    /*setTimeout(() => {
        confetti.clear();
    }, 5000);*/
}
  
