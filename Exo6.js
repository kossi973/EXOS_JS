let temp = parseInt(prompt("Entrez la température :"));
let unite = prompt("Choisir l'unité, C ou F :");

while (
  unite.trim().toLowerCase() !== "c" &&
  unite.trim().toLowerCase() !== "f"
) {
  unite = prompt("Choisir l'unité, C ou F :");
  console.log(unite);
}

if (unite.trim().toLowerCase() === "c") {
  console.log(temp + " °C équivaut à " + (temp * 1.8 + 32.0) + " °F");
} else {
  console.log(temp + " °F équivaut à " + (temp - 32) / 1.8 + " °C");
}
