let nombre = parseInt(prompt("Entrez un nombre :"));
let factorielle = 1;

if (nombre >= 0) {
  for (let i = 1; i <= nombre; i++) {
    factorielle *= i;
  }
  console.log("La factorielle de " + nombre + " est: " + factorielle + " !");
} else {
  console.log("Le nombre doit être >= 0 !!!");
}
