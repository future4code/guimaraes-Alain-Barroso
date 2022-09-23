import { fibonacci } from "./fibonacci";
import { factorial } from "./factorial";
import { printCharacters } from "./printCharacters";
import { checkEmptyObject } from "./checkEmptyObject";

console.log("factorial:");
console.log("1", factorial(1));
console.log("2", factorial(2));
console.log("3", factorial(3));
console.log("4", factorial(4));
console.log("5", factorial(5));
console.log("6", factorial(6));

console.log("fibonacci:");
console.log("1", fibonacci(1));
console.log("2", fibonacci(2));
console.log("3", fibonacci(3));
console.log("4", fibonacci(4));
console.log("5", fibonacci(5));
console.log("6", fibonacci(6));
console.log("Count", fibonacci(7));

console.log("printCharacters:");
console.log("Olá", printCharacters("Olá"));
console.log("tudo", printCharacters("tudo"));
console.log("bem?", printCharacters("bem?"));