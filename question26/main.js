"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain. If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien. If the alien’s color isn’t green, print a statement that the player just earned 10 points. Write one version of this program that runs the if block and another that runs the else block.
let alien_color = 'green';
const lowerCaseInput = alien_color.toLowerCase();
console.log("The Alien color is: " + alien_color);
if (lowerCaseInput === 'green') {
    console.log("You just earned 5 points");
}
else {
    console.log("You just earned 10 points");
}
