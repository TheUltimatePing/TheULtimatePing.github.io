document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById("number");
  const message = document.getElementById("message");
  const timerDisplay = document.getElementById("timer");
  let coef = 1;
  let counterValue = 0;
  let timeUsed = 0;
  let interval;
  let isPaused = false;

  const Textmessage = [
    "Go to 1M!",
    "Wow, that was quick!",
    "You're doing great!",
    "Keep going!",
    "You're getting there!",
    "Sooner or later you'll get there.",
    "That wasn't supposed to append, how did you get that ?",
    "You're a god.",
    "You don't know when to stop, do you ?",
    "The name ''God'' is already taken.",
    "If the name is already taken, then you must be the devil.",
    "You're going to break the game.",
    "Please stop.",
    "You know what happened to the last guy who did that?",
    "He isn't here anymore to tell you.",
    "Fire in the hole!",
    "You're going to destroy the world.",
    "You're going to destroy the universe.",
    "You're going to destroy the multiverse.",
    "You're going to destroy the omniverse.",
    "You're going to destroy the metaverse.",
    "You're going to destroy the megaverse.",
    "You're going to destroy the gigaverse.",
    "You're going to destroy the teraverse.",
    "You're going to destroy the petaverse.",
    "You're going to destroy the exaverse.",
    "You're going to destroy the zettaverse.",
    "You're going to destroy the yottaverse.",
    "You're going to destroy the xennaverse.",
    "There are no more verses to destroy.",
    "You're going to destroy the universe again? Wait, how many times did you destroy it?",
    "That number could kill someone.",
    "What if there were no end?",
    "What if it was all planned from the start?",
    "Did someone call the president?",
    "How did we get here?",
    "It's so big, I can't see the end of it.",
    "Hell is coming.",
    "Who do you think you are?",
    "Yes, I'm talking to you behind the screen.",
    "TheUltimatePing...",
    "The creator...",
    "Of my world, the world of big numbers.",
    "Bro broke everything.",
    "God and the devil are contemplating your efforts.",
    "They laugh...",
    "God - This pathetic mortal is trying to equal us.",
    "Devil - He will."
  ];

  // Mise à jour du compteur et du message basé sur les puissances de 10
  function updateCounter() {
    counter.innerHTML = counterValue;
    let powerOfTen = Math.floor(Math.log10(counterValue));
    
    // Si le compteur atteint une nouvelle puissance de 10, afficher le message correspondant
    if (powerOfTen >= 0 && powerOfTen < Textmessage.length) {
      message.innerText = Textmessage[powerOfTen];
    }
  }

  // Incrémenter le compteur chaque seconde
  function increment() {
    counterValue += coef;
    timeUsed++;
    updateCounter();
    timerDisplay.innerText = timeUsed;
  }

  // Démarrer ou arrêter le compteur
  function toggleCounter() {
    if (isPaused) {
      interval = setInterval(increment, 1000);
      document.getElementById('pauseResume').innerText = "Pause";
      isPaused = false;
    } else {
      clearInterval(interval);
      document.getElementById('pauseResume').innerText = "Resume";
      isPaused = true;
    }
  }

  // Réinitialiser le compteur
  function resetCounter() {
    clearInterval(interval); // Annuler tous les intervalles en cours
    counterValue = 0;
    timeUsed = 0;
    coef = 1;
    updateCounter();
    timerDisplay.innerText = timeUsed;
    document.getElementById('pauseResume').innerText = "Pause";
    isPaused = false;
    interval = setInterval(increment, 1000); // Redémarrer le compteur après la réinitialisation
  }

  // Modifier le coefficient
  function changeCoef(newCoef) {
    coef *= newCoef;
    console.log('Coefficient changed to: ', coef);
  }

  // Écouteurs d'événements
  document.getElementById("increaseCoef").addEventListener("click", () => changeCoef(2));
  document.getElementById("decrease").addEventListener("click", () => changeCoef(-1));
  document.getElementById("reset").addEventListener("click", resetCounter);
  document.getElementById("pauseResume").addEventListener("click", toggleCounter);

  // Initialisation
  resetCounter();
});
