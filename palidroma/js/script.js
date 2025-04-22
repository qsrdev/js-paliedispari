let inputWord = prompt("Inserisci la parola da analizzare");
console.log(inputWord);
let reverseWord = "";

function isPalindrome(inputWord) {
  for (let i = inputWord.length - 1; i >= 0; i--) {
    console.log(inputWord[i]);
    reverseWord += inputWord[i];
  }

  if (reverseWord === inputWord) {
    console.log(`La parola ${reverseWord} è palindroma`);
  } else {
    console.log(`La parola non è palindroma`);
  }
  return reverseWord;
}

isPalindrome(inputWord);
