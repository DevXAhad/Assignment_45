// Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. Add one new guest to the beginning of your array. Add one new guest to the middle of your array. Use append() to add one new guest to the end of your list. Print a new set of invitation messages, one for each person in your list.

let guestList: string [] = ['Usman', 'Zaid', 'Rayyan', 'Sufyan', 'Alyan']
let absentGuest: string = 'Usman';
let newGuest: string = 'Abdul Ahad';
guestList[0] = newGuest ;
for (let i=0; i<guestList.length; i++) {
    console.log('Greetings! I would like to request your honorable presence Mr/Mrs: ' + guestList[i] + ', \non the dinner orgranized by, The Reliance Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n')
}
console.log(`Unfortunately, Mr.${absentGuest} will not be able to attend the dinner with us.\n`);
console.log(`\nGood News! We have found a bigger table to accomodate more guests. Hence, we have decided to invite three more guests\n`)
guestList.unshift('Anant Ambani');  //unshift fnc is used to add at the start of an array
guestList.splice(3 , 0 , 'Mukesh Ambani');  //splice fnc is used to modify arrayBuffer, syntax: array.splice(index, howmany, item1, ..., itemX)
guestList.push('Nita Ambani');  //push fnc is used to add at the end of an array
for (let i=0; i<guestList.length; i++) {
    console.log('\nGreetings! I would like to request your honorable presence Mr/Mrs: ' + guestList[i] + ', \non the dinner orgranized by, The Reliance Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n')
}