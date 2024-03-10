"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of them.
//Test 1
let country = 'Czech Republic';
console.log("Is country != 'Czech Republic'? I predict true.");
console.log("The country is: " + country);
console.log(country == 'Czech Republic');
// Test 2
let marksOfStudent1 = 25;
let marksOfStudent2 = 50;
let diffInMarks = marksOfStudent2 - marksOfStudent1;
console.log("\nDoes Student 1 and Student 2 both have the same marks? I predict false.");
console.log(marksOfStudent1 == marksOfStudent2);
console.log(`Both the students have a difference of ${diffInMarks} marks.`);
