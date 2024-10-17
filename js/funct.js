export function isString(word) {
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
