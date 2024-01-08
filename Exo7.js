// Return true if n is prime

function estPremier(n) {
  // Un nombre premier est >= 2
  if (n < 2) return false;

  // Vérifie tous les diviseurs compris entre 2 et racine carrée de n.
  for (let i = 2, fin = Math.sqrt(n); i <= fin; i++)
    // Si n n'est pas un nombre premier, il existe nécessairement un diviseur dans cet interval.
    if (n % i == 0) return false;

  return true;
}

let nombre = parseInt(prompt("Entrez un nombre :"));

if (estPremier(nombre) === true) {
  console.log(nombre + " est un nombre premier !");
} else console.log(nombre + " n'est pas un nombre premier !");
