let chiffre1 = parseInt(prompt("Entrez chiffre 1"));
let chiffre2 = parseInt(prompt("Entrez chiffre 2"));

if (chiffre1 > chiffre2) {
  console.log("chiffre 1 > chiffre 2 : " + chiffre1 + " > " + chiffre2);
} else if (chiffre1 < chiffre2) {
  console.log("chiffre 1 < chiffre 2 : " + chiffre1 + " < " + chiffre2);
} else {
  console.log("chiffre 1 = chiffre 2 : " + chiffre1 + " = " + chiffre2);
}
