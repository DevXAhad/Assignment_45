"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. Print a message to each of the two people still on your list, letting them know they’re still invited. Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ['Usman', 'Zaid', 'Rayyan', 'Sufyan', 'Alyan'];
let absentGuest = 'Usman';
let newGuest = 'Abdul Ahad';
guestList[0] = newGuest;
console.log(`Unfortunately, Mr.${absentGuest} will not be able to attend the dinner with us.\n`);
console.log(`\nGood News! We have found a bigger table to accomodate more guests. Hence, we have decided to invite three more guests\n`);
guestList.unshift('Anant Ambani'); //unshift fnc is used to add at the start of an array
guestList.splice(3, 0, 'Mukesh Ambani'); //splice fnc is used to modify arrayBuffer, syntax: array.splice(index, howmany, item1, ..., itemX)
guestList.push('Nita Ambani'); //push fnc is used to add at the end of an array
for (let i = 0; i < guestList.length; i++) {
    console.log('\nGreetings! I would like to request your honorable presence Mr/Mrs: ' + guestList[i] + ', \non the dinner orgranized by, The Reliance Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n');
}
console.log(`\nUnfortunately, we can only invite two guests at the moment.\n`);
while (guestList.length > 2) {
    let removedGuest = guestList.pop(); //removes guests until two guests are left in the array
    console.log(`Sorry! We apologise Mr/Mrs ${removedGuest}, you are not invited.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`\nDear Mr/Mrs: ` + guestList[i] + `, You are still invited.\n`);
}
guestList.splice(0, 2); //deletes 2 indexes starting from 0
console.log("The array below displays the empty guest list after removing all the guests: ");
console.log(guestList);
