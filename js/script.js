// Esercizio Fizzbuzz (Creiamo una lista di numeri da 1 a 100 con variabili fizz , buzz e fizzbuzz)

// creiamo il ciclo for 

for (let i = 1; i <= 100; i++) {
    


     
    // poniamo la condizione se ci sono numeri divisibili per 3  e 5 li nominiamo fizzbuzz
    
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
     // poniamo la condizione se ci sono numeri divisibili per  5 li nominiamo buzz
    else if( i % 5 == 0){
        console.log("buzz");
    }
     // poniamo la condizione se ci sono numeri divisibili per 3 e li nominiamo fizz
    else if( i % 3 == 0){
        console.log("fizz");

       
    }
    //Altrimenti facciamo tutto normale
    else{
        console.log(i);
    }
    
   

        
    
  }


