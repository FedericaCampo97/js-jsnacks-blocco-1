/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

//prompt x2
//if/else
//console.log

//Chiedo il primo numero all'utente
//const firstUserNumber = prompt ('Scegli un numero');


//Chiedo un secondo numero all'utente
//const secondUserNumber = prompt ('Scegli ancora un numero diverso dal primo');

//Dichiaro e stampo sia in console che in pagina solo il numero maggiore 
//if (firstUserNumber > secondUserNumber) {
    //console.log(firstUserNumber)
    //document.getElementById ('result').innerHTML = ' Il numero vincente è ' + firstUserNumber
//} else if (firstUserNumber < secondUserNumber) {
    //console.log(secondUserNumber)
    //document.getElementById ('result').innerHTML = ' Il numero vincente è ' + secondUserNumber
//}

/*Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

let x=1
let list = []
while (x <= 2) {
    let number = prompt ('scegli un numero') 
    number = parseInt(number)
    list.push(number)
    x++
}
console.log(list)
if (list[0] > list[1]) {
    console.log(list[0])
} else if (list[0] < list[1]) {
    console.log(list[1])
}







