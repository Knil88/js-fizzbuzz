// Esercizio Fizzbuzz (Creiamo una lista di numeri da 1 a 100 con variabili fizz , buzz e fizzbuzz)

// creiamo il ciclo for 



for (let i = 1; i <= 100; i++) {
  
    const container = document.querySelector(".container");
    
    const element = document.createElement("div");

    

    element.classList.add("box");

    container.append(element);

     
    // poniamo la condizione se ci sono numeri divisibili per 3  e 5 li nominiamo fizzbuzz
    
    if(i % 3 === 0 && i % 5 === 0){
       let fizzBuzz = "Fizzbuzz"
       fizzBuzz.classList.add("fizzbuzz");
        element.append(fizzBuzz);
       
    }
     // poniamo la condizione se ci sono numeri divisibili per  5 li nominiamo buzz
    else if( i % 5 == 0){
        let buzz = "Buzz";

        element.append(buzz);

        console.log(buzz);
    }
     // poniamo la condizione se ci sono numeri divisibili per 3 e li nominiamo fizz
    else if( i % 3 == 0){
        let fizz = "Fizz";

        element.append(fizz);

        console.log(fizz);
        

        console.log("fizz");

       
    }
    //Altrimenti facciamo tutto normale
    else{
        console.log(i);

        element.append(i);
    }
    
   

        
    
  }


