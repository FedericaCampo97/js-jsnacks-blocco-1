/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

//for
  //prompt
  //console.log


let total = 0
//inizio il ciclo
for (let i = 0; i < 10; i++) {
    //Chiedo 10 volte il numero
    let number = prompt ('Scegli un numero');
    //trasformo la stringa in numero
    number = parseInt(number);
    console.log(number);
    //sommo ogni totale con il nuovo numero inserito dall'utente
    total = number + total
    //stampo in console il totale
    console.log(total)
}


