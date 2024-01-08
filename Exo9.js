let compteur = 10;

let interval = setInterval(function () {
  console.log(compteur);
  compteur -= 1;
  // A la fin du décompte
  if (compteur < 1) {
    // Arrêter le compteur
    clearInterval(interval);
    console.log("Compte à rebours terminé !");
  }
}, 1000);
