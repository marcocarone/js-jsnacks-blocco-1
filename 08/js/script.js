// Snack6
// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.


var numUtente = parseInt(prompt("inserisci il numero"));

for (i = 1; i <= numUtente; i++) {
  console.log(i);
  var x = Math.pow(i, 3);
  console.log(x);
  document.getElementById("azione").innerHTML += "<li>" + x + "</li>";
}
