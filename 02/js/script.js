// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt("inserisci la prima parola");
var parola2 = prompt("inserisci la seconda parola");
if (parola1.length > parola2.length) {
  console.log(parola2 + " " + parola1);
  document.getElementById("maggiore").innerHTML = parola2 + " " + parola1;
} else if (parola2.length > parola1.length) {
  console.log(parola1 + " " + parola2);
  document.getElementById("maggiore").innerHTML = parola1 + " " + parola2;
}
