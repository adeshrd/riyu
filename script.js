window.onload = function() {


    new TypeIt("#app", {
        speed: 20,
        loop: false,
        afterComplete: async (instance) => {
            new TypeIt("#que", {
                strings: "I wanted to <span style=\"color: #27ae60;\">wish</span> you...",
                speed: 150,
                loop: false,
            })
                .go()
        },
    })
        .type("Hi Riyu &#128075;")
        .break()
        .pause(500)
        .type("Today is an amazing day!")
        .go();


/*        .deleteChars(10)
        .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
        .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
        .pauseFor(1000)*/

}



function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "I believe in love at first sight too! How about we go on a date and see if it's true?";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "No worries, love takes time. But can we spend some time together and see if something beautiful blossoms?";
    showConfetti()

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
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
  
