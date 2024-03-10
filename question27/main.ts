//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
import * as readlineSync from 'readline-sync';

let alien_color: string = readlineSync.question("Input Alien color: \nAvailable Colors: Yellow, Red or Green\nInput here: ");
console.log("The Alien color is: " + alien_color);
const lowerCaseInput = alien_color.toLowerCase();
if (lowerCaseInput === 'green') { // === checks both the value and the type of the operands.
    console.log("You just earned 5 points");
} else if (lowerCaseInput === 'yellow') {
    console.log("You just earned 10 points");
} else if (lowerCaseInput === 'red') {
    console.log("You just earned 15 points");
} else {
    console.log("Invalid alien color. No points earned.");
}