/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

//prompt x2 
//if else
//console.log

//Chiedo all'utente la prima parola 
//const firstWord = prompt('Inserisci una parola');

//Chiedo all'utente una seconda parola 
//const secondWord = prompt('Inserisci una seconda parola');

//Dichiaro e stampo in console prima la parola più corta poi quella più lunga
//if (firstWord > secondWord) {
    //console.log(firstWord + '-' + secondWord)
//} else if (firstWord < secondWord) {
    //console.log(secondWord + '-' + firstWord)
//}

let x=1
let list = []
while (x <= 2) {
    const word = prompt ('Inserisci una parola')
    list.push(word)
    x++
}
console.log(list)
if (list[0] > list[1]) {
    console.log(list[0] + list[1])
} else if (list[0] < list[1]) {
    console.log(list[1] + list[0])
}
