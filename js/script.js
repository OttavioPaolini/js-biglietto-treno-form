// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2 (BONUS):
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


// NUMERO DI KM
const userKmInput = document.getElementById("km");

// NOME PASSEGGERO
const userNameInput = document.getElementById("user-name")

// ETA' PASSEGGERO
const userAgeInput = document.getElementById("user-age");

// PREZZO BIGLIETTO FISSO 0.21
const ticketPrice = 0.21;

// ESECUZIONE CALCOLO

// BOTTONE
const submitBtnInput = document.getElementById("my_btn");

submitBtnInput.addEventListener('click', function() {
    const userKm = userKmInput.value;
    const userName = userNameInput.value;
    const userAge = userAgeInput.value;

    const priceInput = ticketPrice * userKm;
    console.log(priceInput, typeof(priceInput));

    let discountPercentage = 0;


    if (userAge < 18) {
        discountPercentage = 20;
        } else if (userAge > 65) {
        discountPercentage = 40;
    }
    let finalPrice = priceInput - (priceInput * discountPercentage / 100);
    finalPrice = finalPrice.toFixed(2);

    console.log(finalPrice, typeof(finalPrice));

    document.getElementById("result").innerHTML = `<h2>Il costo del tuo biglietto è di : € ${finalPrice}</h2>` 

    userKmInput.value = "";
    userNameInput.value = "";
    userAgeInput.value = "";
})

// SCONTO MINORENNI 20%
// SCONTO OVER 65%

// OUTPUT PREZZO BIGLIETTO