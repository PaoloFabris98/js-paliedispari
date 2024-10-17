function isString(word) {
  return typeof word === "string";
}

export function palindroCheck(palindroIN) {
  if (isString(palindroIN)) {
    let wordSplitted = palindroIN.split("");
    let wordReverted = wordSplitted.reverse();
    let wordJoined = wordReverted.join("");
    console.log(palindroIN);
    console.log(wordJoined);
    if (palindroIN === wordJoined) {
      console.log(`La parola: ${palindroIN}, è palindroma`);
    } else {
      console.log(`La parola: ${palindroIN}, non è palindroma`);
    }
  } else {
    console.log("Quanto digitato non può essere un numero");
  }
}

const min = 1;
const max = 5;

function randomNum(min, max) {
    const temp = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(temp);
    return temp;
}

export function evenOddNumberProcessing(choice, number) {
  const randomValue = randomNum(min, max);
  console.log(randomValue);
  const prova = Number(number) + Number(randomValue);
  console.log(prova);
  console.log(`Hai scelto: ${number}`);
  console.log(`Hai scelto: ${choice}`);
  if (choice === "pari") {
    if (prova % 2 === 0) {
      console.log(`Il numero ${prova} è pari. Hai vinto!`);
    } else if (prova % 2 !== 0) {
      console.log(`Il numero ${prova} è dispari. Hai perso!`);
    }
  } else {
    if (prova % 2 === 0) {
      console.log(`Il numero ${prova} è pari. Hai perso!`);
    } else if (prova % 2 !== 0) {
      console.log(`Il numero ${prova} è dispari. Hai vinto!`);
    }
  }
}
