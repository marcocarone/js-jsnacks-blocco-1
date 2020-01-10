// snack4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var listaNomi = ["angelo", "francesco", "carlo"];
var nomeUtente = prompt("inserisci il nome");
var trovato = false;
var i = 0;
var messaggio = "non sei in lista. mi dispiace!";
while (trovato == false && i < listaNomi.length) {
  if (nomeUtente == listaNomi[i]) {
    trovato = true;
  }
  i++
  if (trovato == true) {
    messaggio = "sei nella lista invitati!";
  }
}
document.getElementById('azione').innerHTML = messaggio;
// METODO FOR
// for (var i = 0; i < listaNomi.length; i++) {
//   if (nomeUtente == listaNomi[i]) {
//     trovato = true;
//   }
//
//   if (trovato == true) {
//     document.getElementById('azione').innerHTML = "sei nella lista invitati!";
//   } else {
//     document.getElementById('azione').innerHTML = "non ti vogliamo";
//   }
//
// }
