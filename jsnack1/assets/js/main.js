// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.


const listaAuto = [
    {
        marca:`Audi`,
        modello:`Q3`,
        alimentazione:`diesel`
    },
    {
        marca:`Audi`,
        modello:`A3`,
        alimentazione:`diesel`
    },
    {
        marca:`Audi`,
        modello:`Q5`,
        alimentazione:`diesel`
    },
    {
        marca:`Audi`,
        modello:`Rs3`,
        alimentazione:`benzina`
    },
    {
        marca:`Audi`,
        modello:`Rs6`,
        alimentazione:`benzina`
    },
    {
        marca:`Fiat`,
        modello:`Panda`,
        alimentazione:`gpl`
    },
    {
        marca:`Mercedez`,
        modello:`ClA`,
        alimentazione:`diesel`
    },
    {
        marca:`Bmw`,
        modello:`M4`,
        alimentazione:`benzina`
    },
    {
        marca:`Tesla`,
        modello:`model x`,
        alimentazione:`elettrico`
    },
    {
        marca:`Tesla`,
        modello:`model s`,
        alimentazione:`elettrico`
    },
]




const benzina = listaAuto.filter(macchina => {
    if (macchina.alimentazione === `benzina`) {
        return true
        
    }
});
 console.log(benzina);

 const diesel = listaAuto.filter(macchina => {
    if (macchina.alimentazione === `diesel`) {
        return true
        
    }
});

console.log(diesel);
