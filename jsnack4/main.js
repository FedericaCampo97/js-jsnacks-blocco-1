/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

//array
//for
  //prompt
  //if


//Creo un array vuota
let list = [];


//Creo un ciclo 
for (let i = 0; i < 6 ; i++) {
    //chiedo sei volte un numero all'utente
    let number = prompt ('inserisci un numero');
    number = parseInt(number);
    console.log(number)
    if (number % 2) {
        console.log()
    } else {
        list.push[number]
    }
}
console.log(list)

