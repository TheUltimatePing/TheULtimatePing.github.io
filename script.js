document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById("number");
  const message = document.getElementById("message");
  let coef = 1; // Coefficient initial
  let counterValue = 0;
  let Textmessage = [
    "go to 1M !",
    "wow that was quick !",
    "you're doing great !",
    "it's a good start !",
    "keep going !",
    "you're getting there !",
    "Sooner or later you'll get there.",
    "That wasn't supposed to append, how did you get that ?",
    "You're a god.",
    "You don't know when to stop, do you ?",
    "The name ''God'' is already taken.",
    "If the name is already taken, then you must be the devil.",
    "you are going to break the game.",
    "Please stop.",
    "You know what append to the last guy who did that ?",
    "He is not here anymore to tell you.",
    "Fire in the hole !",
    "You are going to destroy the world.",
    "You are going to destroy the universe.",
    "You are going to destroy the multiverse.",
    "You are going to destroy the omniverse.",
    "You are going to destroy the metaverse.",
    "You are going to destroy the megaverse.",
    "You are going to destroy the gigaverse.",
    "You are going to destroy the teraverse.",
    "You are going to destroy the petaverse.",
    "You are going to destroy the exaverse.",
    "You are going to destroy the zettaverse.",
    "You are going to destroy the yottaverse.",
    "You are going to destroy the xennaverse.",
    "There is no more verses to destroy.",
    "You are going to destroy the universe again ?, wait how many times did you destroy it ?",
    "That number could kill someone.",
    "What if there were no end ...",
    "What if it was all planned from the start ?",
    "Did someone call the president ?",
    "How did we get here",
    "it's so big i can't see the end of it",
    "hell is comming",
    "Who do you think you are ?",
    "Yes, i'm talking to you behind the screen",
    "TheUltimatePing ...",
    "The creator ...",
    "Of my world, the world of big numbers",
    "Bro broke everything",
    "God as well as the devil are in contemplation of your efforts",
    "They laugh...",
    "God - This pathetic mortal is trying to egual us",
    "Devil - He will."
  ]

  if (counter) {
      function increment() {
        counter.innerHTML = Number(counter.innerHTML) + (1 * coef);
        counterValue = getCounterValue();
        
        message.innerText = Textmessage[String(counterValue).length];
        }

      window.getCounterValue = function() {
        let counterValue = Number(counter.innerHTML);
        console.log('Current counter value: ', counterValue);
        return counterValue;
        }

      // Incrémenter le compteur toutes les secondes en prenant en compte le coefficient
      setInterval(increment, 1000);

      // Exemple de fonction pour changer le coefficient
      window.changeCoef = function(newCoef) {
          coef*=newCoef;
          console.log('Coefficient changed to: ', coef);
      }

  } else {
      console.error('Element with ID "number" not found.');
  }
});