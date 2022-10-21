const listaAnimali = [
    { nome: 'leone', 
      famiglia: 'felidi', 
      classe: 'mammiferi' 
    },
    { nome: 'cane', 
    famiglia: 'canidi', 
    classe: 'mammiferi' 
    },
    { nome: 'gallina', 
    famiglia: 'fasianidi', 
    classe: 'uccelli' 
    },
  ]

  const mammiferi = listaAnimali.filter(mammiferi => {
    if (mammiferi.classe === `mammiferi`) {
        return true
        
    }
});
 console.log(mammiferi);