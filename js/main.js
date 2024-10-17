import { palindroCheck } from "./funct.js";
import { evenOddNumberProcessing } from "./funct.js";

//inserimento parola palindroma
const palindroIN = prompt("Digita una parola:");
const evenOddchoice = prompt("Scegli se pari o dispari:").toLocaleLowerCase();
const evenOddNumber = prompt("Scegli il tuo numero:");

palindroCheck(palindroIN);
evenOddNumberProcessing(evenOddchoice,evenOddNumber);

