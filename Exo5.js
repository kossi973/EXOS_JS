let chiffre1 = parseInt(prompt("Entrez chiffre 1"));
let chiffre2 = parseInt(prompt("Entrez chiffre 2"));
let chiffre3 = parseInt(prompt("Entrez chiffre 3"));

moyenne = (chiffre1 + chiffre2 + chiffre3) / 3;

console.log(
  "La moyenne des nombres " +
    chiffre1 +
    ", " +
    chiffre2 +
    " et " +
    chiffre3 +
    " est : " +
    moyenne
);
