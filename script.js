document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById("number");
  let coef = 1; // Coefficient initial

  if (counter) {
      function increment() {
          counter.innerHTML = Number(counter.innerHTML) + (1 * coef);
      }

      // Incrémenter le compteur toutes les secondes en prenant en compte le coefficient
      setInterval(increment, 1000);

      // Exemple de fonction pour changer le coefficient
      function changeCoef(newCoef) {
          coef = newCoef;
      }

      // Exemple d'utilisation pour changer le coefficient
      // changeCoef(2); // Décommenter pour changer le coefficient à 2
  } else {
      console.error('Element with ID "number" not found.');
  }
});