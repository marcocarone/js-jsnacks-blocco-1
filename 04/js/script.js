// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for

var somma = 0;
i = 0;
while (i < 5) {
  var num = parseInt(prompt("Inserisci il numero"));
  somma += num;
  i++
}
document.getElementById("maggiore").innerHTML = somma;

// METODO FOR
// for (i = 0; i < 5; i++) {
//   var num = parseInt(prompt("Inserisci il numero"));
//   somma += num;
// }
//
// console.log(somma);
//  document.getElementById("maggiore").innerHTML = somma;
