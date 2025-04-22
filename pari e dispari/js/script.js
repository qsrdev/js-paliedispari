let user;
let userEven;
let userOdd;

function oddoreven() {
  console.log(`Accesso alla funzione di Richiesta se il giocatore vuole essere pari o dispari`);
  let retry = 5;
  const userType = parseInt(prompt("Scrivi \n 0: per pari \n 1: per dispari"));
  if (userType === 0) {
    user = userEven;
    alert(`L'utente sarà pari`);
  } else if (userType === 1) {
    user = userOdd;
    alert(`L'utente sarà dispari`);
  } else {
    alert(`Il numero inserito non va bene riprova`);
    if (--retry > 0) oddoreven();
  }
  return user;
}

oddoreven();

function userNumber() {
  console.log(`Accesso alla funzione di richiesta del numero del giocatore`);
  let retry = 5;
  const userInput = parseInt(prompt("Dimmi un numero da 1 a 5"));
  if (userInput >= 1 && userInput <= 5) {
    console.log(`Il numero inserito dal giocatore é ${userInput}`);
  } else {
    alert(`Il numero inserito non va bene riprova`);
    if (--retry > 0) userNumber();
  }
  return userInput;
}

userNumber();

function roll() {
  console.log(`Accesso alla funzione di roll per il computer`);
  const rollCPU = Math.floor(Math.random() * 5) + 1;
  console.log(`Il numero del computer è ${rollCPU}`);
  return rollCPU;
}

roll();

function vincitore() {
  console.log(`Calcolo del vincitore`);
  let risultato = userNumber() + roll();
  if (risultato % 2 === 0 && user == userEven) {
    alert(`Vince il giocatore`);
  } else if (risultato % 2 != 0 && user == userOdd) {
    alert(`Vince il giocatore`);
  } else {
    alert(`Vince il computer`);
  }
  return risultato;
}

vincitore();
