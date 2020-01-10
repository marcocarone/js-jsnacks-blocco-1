// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var listaNum = [];

for (var i = 0; i < 6; i++) {
  var numUtente = parseInt(prompt("inserisci il numero"));
  if (numUtente % 2 != 0) {
    listaNum.push(numUtente);
    console.log(listaNum);
  }
}
document.getElementById("azione").innerHTML = listaNum;
