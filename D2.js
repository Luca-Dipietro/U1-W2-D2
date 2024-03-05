/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es1 = "Esercizio 1";
console.log(Es1);
const numeroFornito1Es1 = 16;
const numeroFornito2Es1 = 4;
if (numeroFornito1Es1 > numeroFornito2Es1) {
  console.log("Il numero più grande tra i due è:", numeroFornito1Es1);
} else {
  console.log("Il numero più grande tra i due è:", numeroFornito2Es1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es2 = "Esercizio 2";
console.log(Es2);
const numeroFornitoEs2 = 16;
if (numeroFornitoEs2 !== 5) {
  console.log("Not Equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es3 = "Esercizio 3";
console.log(Es3);
const numeroFornitoEs3 = 5;
if (numeroFornitoEs3 % 5 === 0) {
  console.log("Il numero è divisibile per 5");
} else {
  console.log("Il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es4 = "Esercizio 4";
console.log(Es4);
const numeroFornito1Es4 = 16;
const numeroFornito2Es4 = 8;
const addizioneNumeri = numeroFornito1Es4 + numeroFornito2Es4;
const sottrazioneNumeri = numeroFornito1Es4 - numeroFornito2Es4;
if (
  numeroFornito1Es4 === 8 ||
  numeroFornito2Es4 === 8 ||
  addizioneNumeri === 8 ||
  sottrazioneNumeri === 8
) {
  console.log(
    "Uno dei dei due numeri ha valore 8 oppure la loro sottrazione o addizione da valore 8"
  );
} else {
  console.log("Nessuna delle richieste viene rispettata");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es5 = "Esercizio 5";
console.log(Es5);
const totalShoppingCart = 400;
const speditionCost = 10;
if (totalShoppingCart > 50) {
  console.log("L'ammontare totale del checkout è", totalShoppingCart);
} else {
  console.log(
    "L'ammontare totale del checkout è",
    totalShoppingCart + speditionCost
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es6 = "Esercizio 6";
console.log(Es6);
const percentualeSconto = 20;
const prezzoFinale = (totalShoppingCart * percentualeSconto) / 100;
if (prezzoFinale > 50) {
  console.log("L'ammontare totale del checkout è", prezzoFinale);
} else {
  console.log(
    "L'ammontare totale del checkout è",
    prezzoFinale + speditionCost
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es7 = "Esercizio 7";
console.log(Es7);
const a = 16;
const b = 4;
const c = 33;
if (a >= b && a >= c && b >= c) {
  console.log(a, b, c);
} else if (b >= a && b >= c && a >= c) {
  console.log(b, a, c);
} else {
  if (a >= b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es8 = "Esercizio 8";
console.log(Es8);
const numeroFornitoEs8 = 16;
if (typeof numeroFornitoEs8 === "number") {
  console.log(numeroFornitoEs8, "è un numero");
} else {
  console.log(numeroFornitoEs8, "non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es9 = "Esercizio 9";
console.log(Es9);
const numeroFornitoEs9 = 16;
if (numeroFornitoEs9 % 2 === 0) {
  console.log(numeroFornitoEs9, "è pari");
} else {
  console.log(numeroFornitoEs9, "è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es10 = "Esercizio 10";
console.log(Es10);
let val = 7;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es11 = "Esercizio 11";
console.log(Es11);
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es12 = "Esercizio 12";
console.log(Es12);
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es13 = "Esercizio 13";
console.log(Es13);
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es14 = "Esercizio 14";
console.log(Es14);
let array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es15 = "Esercizio 15";
console.log(Es15);
array[array.length - 1] = 100;
console.log(array);

//Per gli esercizi dall'11 al 15, essendo che si va a modificare l'oggetto e l'array in questione,
// si possono commentare di volta in volta gli esercizi prima e dopo, giusto per verificare la corretta soluzione degli esercizi
