document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById("number");
  const message = document.getElementById("message");
  let coef = 1; // Coefficient initial
  let counterValue = 0;

  if (counter) {
      function increment() {
          counter.innerHTML = Number(counter.innerHTML) + (1 * coef);
          counterValue = getCounterValue();

          if (counterValue > 1000 && counterValue < 100000) {
            message.innerText = "You're doing great !"
          }
          else if (counterValue > 100000 && counterValue < 1000000) {
            message.innerText = "Sooner or later you'll get there."
          }
          else if (counterValue > 1000000 && counterValue < 10000000) {
            message.innerText = "how did you get that ?"
          }
          else if (counterValue > 10000000 && counterValue < 100000000) {
              message.innerText = "You're a god."
          }
          else if (counterValue > 100000000 && counterValue < 1000000000) {
              message.innerText = "You don't know when to stop, do you ?"
          }
          else if (counterValue > 1000000000 && counterValue < 10000000000) {
              message.innerText = "The name ''God'' is already taken."
          }
          else if (counterValue > 10000000000 && counterValue < 100000000000) {
            message.innerText = "If the name is already taken, then you must be the devil." 
          }

          else if (counterValue > 100000000000 && counterValue < 1000000000000) {
            message.innerText = "you are going to break the game."
          }

          else if (counterValue > 1000000000000 && counterValue < 10000000000000) {
            message.innerText = "Please stop."
          }

          else if (counterValue > 10000000000000 && counterValue < 100000000000000) {
            message.innerText = "You know what append to the last guy who did that ?"
          }

          else if (counterValue > 100000000000000 && counterValue < 1000000000000000) {
            message.innerText = "He is not here anymore to tell you."
          }

          else if (counterValue > 1000000000000000 && counterValue < 10000000000000000) {
            message.innerText = "Fire in the hole !"
          }

          else if (counterValue > 10000000000000000 && counterValue < 100000000000000000) {
            message.innerText = "You are going to destroy the world."
          }

          else if (counterValue > 100000000000000000 && counterValue < 1000000000000000000) {
            message.innerText = "You are going to destroy the universe."
          }
    
            else if (counterValue > 1000000000000000000 && counterValue < 10000000000000000000) {
            message.innerText = "You are going to destroy the multiverse."
            }
    
            else if (counterValue > 10000000000000000000 && counterValue < 100000000000000000000) {
                message.innerText = "You are going to destroy the omniverse."
            }
    
            else if (counterValue > 100000000000000000000 && counterValue < 1000000000000000000000) {
                message.innerText = "You are going to destroy the metaverse."
            }
    
            else if (counterValue > 1000000000000000000000 && counterValue < 10000000000000000000000) {
                message.innerText = "You are going to destroy the megaverse."
            }
    
            else if (counterValue > 10000000000000000000000 && counterValue < 100000000000000000000000) {
                message.innerText = "You are going to destroy the gigaverse."
            }
                
            else if (counterValue > 100000000000000000000000 && counterValue < 1000000000000000000000000) {
                message.innerText = "You are going to destroy the teraverse."
            }

            else if (counterValue > 1000000000000000000000000 && counterValue < 10000000000000000000000000) {
                message.innerText = "You are going to destroy the petaverse."
            }

            else if (counterValue > 10000000000000000000000000 && counterValue < 100000000000000000000000000) {
                message.innerText = "You are going to destroy the exaverse."
            }

            else if (counterValue > 100000000000000000000000000 && counterValue < 1000000000000000000000000000) {
                message.innerText = "You are going to destroy the zettaverse."
            }

            else if (counterValue > 1000000000000000000000000000 && counterValue < 10000000000000000000000000000) {
                message.innerText = "You are going to destroy the yottaverse."
            }

            else if (counterValue > 10000000000000000000000000000 && counterValue < 100000000000000000000000000000) {
                message.innerText = "You are going to destroy the xennaverse."
            }

            else if (counterValue > 100000000000000000000000000000 && counterValue < 1000000000000000000000000000000) {
                message.innerText = "There is no more verses to destroy."
            }

            else if (counterValue > 1000000000000000000000000000000 && counterValue < 10000000000000000000000000000000) {
                message.innerText = "You are going to destroy the universe again ?, wait how many times did you destroy it ?"
            }

            else if (counterValue > 10000000000000000000000000000000 && counterValue < 100000000000000000000000000000000) {
                message.innerText = "That number could kill someone."
            }
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