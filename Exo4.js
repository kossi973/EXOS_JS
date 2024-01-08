let chiffre = parseInt(prompt("Entrez chiffre"));

monResultat = chiffre % 2;

console.log(monResultat);

if (monResultat === 0) {
  console.log(chiffre + " est un nombre pair");
} else {
  console.log(chiffre + " est un nombre impair");
}
