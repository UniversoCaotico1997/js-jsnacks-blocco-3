// A partire da un array di stringhe, 
// crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

// Creiamo un Array di stringhe

const parole = [
    `timmy`,
    `jimmy`,
    `minny`,
]
console.log(parole);

//Utlizziamo il ciclo for per scorrere all'interno della lista 

for (let i = 0; i < parole.length; i++) {
    const parola = parole[i];
    console.log(parola);
    
}

