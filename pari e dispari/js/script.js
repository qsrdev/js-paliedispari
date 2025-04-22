let user;
let userEven;
let userOdd;
let rollCPU;

const languages = {
  it: {
    odd: "pari",
    even: "dispari",
  },
  es: {
    odd: "paris",
    even: "disparis",
  },
  en: {
    odd: "odd",
    even: "even",
  },
  fr: {
    odd: "pariè",
    even: "dispariè",
  },
};

function oddoreven(userType) {
  return userType == 0 ? "odd" : "even";
}

// const userType = prompt("Scrivi \n 0: per pari \n qualsiasi altra cosa per dispari");
const userType = 0;
user = oddoreven(userType);
let number = 7;
let isWinner = checkWin(user, number);

if (isWinner) {
  console.log("hai scelto " + languages.fr[user] + ", è uscito " + number + " per cui hai vinto");
} else {
  console.log("hai scelto " + languages.fr[user] + ", è uscito " + number + " per cui hai perso");
}

function checkWin(user, value) {
  if (value % 2 === 0 && user === "odd") return true;
  if (value % 2 === 1 && user === "even") return true;

  return false;
}
// function userInput() {
//   console.log(`Accesso alla funzione di richiesta del numero del giocatore`);
//   const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
//   if (userNumber >= 1 && userNumber <= 5) {
//     console.log(`Il numero inserito dal giocatore é ${userNumber}`);
//   } else {
//     alert(`Il numero inserito non va bene riprova`);
//   }
//   return userNumber;
// }

// userNumber();

// function roll() {
//   console.log(`Accesso alla funzione di roll per il computer`);
//   const rollCPU = Math.floor(Math.random() * 5) + 1;
//   console.log(`Il numero del computer è ${rollCPU}`);
//   return rollCPU;
// }

// roll();

// function vincitore() {
//   console.log(`Calcolo del vincitore`);
//   let risultato = user + rollCPU;
//   if (risultato % 2 === 0 && user == userEven) {
//     alert(`Vince il giocatore`);
//   } else if (risultato % 2 != 0 && user == userOdd) {
//     alert(`Vince il giocatore`);
//   } else {
//     alert(`Vince il computer`);
//   }
//   return risultato;
// }

// vincitore();
