// Esercizio Fizzbuzz (Creiamo una lista di numeri da 1 a 100 con variabili fizz , buzz e fizzbuzz)

// creiamo il ciclo for 



for (let i = 1; i <= 50; i++) {
  
// Con il querySelector agganciamo la const con la classe container

    const container = document.querySelector(".container");
    
    //Creaimo una const che ci permetta di creare un elemento che nel nostro caso sarà un div

    const element = document.createElement("div");

    //Utilizzando la classlist insieme ad add possiamo aggiungere alla const element la classe box con tutti gli stili messi nel CSS

    element.classList.add("box");

    //utilizziamo append per fare si  che  la const container e quella element si aggancino ovvero che il risultato del ciclo for appaia nel dom

    container.append(element);

     
    // poniamo la condizione se ci sono numeri divisibili per 3  e 5 li nominiamo fizzbuzz
    
    if(i % 3 === 0 && i % 5 === 0){
       let fizzBuzz = "Fizzbuzz";
       
        // utilizziamo append per agganciare la variabile fizzBuzz ai propri div

        element.append(fizzBuzz);

        console.log(fizzBuzz);

        //Combiniamo classlist per dare un background-color per ogni variabile

        element.classList.add("fizzbuzz");
    }
     // poniamo la condizione se ci sono numeri divisibili per  5 li nominiamo buzz
    else if( i % 5 == 0){
        let buzz = "Buzz";

        // utilizziamo append per agganciare la variabile buzz ai propri div

        element.append(buzz);

         //Combiniamo classlist per dare un background-color per ogni variabile

        element.classList.add("buzz");

        console.log(buzz);
    }
     // poniamo la condizione se ci sono numeri divisibili per 3 e li nominiamo fizz
    else if( i % 3 == 0){
        let fizz = "Fizz";

        // utilizziamo append per agganciare la variabile fizz ai propri div

        element.append(fizz);

         //Combiniamo classlist per dare un background-color per ogni variabile

        element.classList.add("fizz");

        console.log(fizz);
        

       

       
    }
    //Altrimenti facciamo tutto normale
    else{
        console.log(i);

        element.append(i);

        
    }
    
   

        
    
  }


