let user;
let userEven;
let userOdd;

function oddoreven() {
  let retry = 5;
  const userType = parseInt(prompt("Scrivi 0 per pari e 1 per dispari"));
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
}

oddoreven();

const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log(`Il numero dell'utente è ${userNumber}`);

function roll() {
  console.log(`Accesso alla funzione di roll per il computer`);
  const rollCPU = Math.floor(Math.random() * 5) + 1;
  return rollCPU;
}

console.log(`Il numero del computer è ${roll()}`);

function vincitor() {
  let somma = userNumber + roll();

  if (somma % 2 === 0) {
    console.log(`Vince utente`);
  }
}
