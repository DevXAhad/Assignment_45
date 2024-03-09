// Question 15, Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. Print a second set of invitation messages, one for each person who is still in your list.
/* let guestList: string [] = ['Usman', 'Zaid', 'Rayyan', 'Sufyan']
for (let i=0; i<guestList.length; i++) {
    console.log('Greetings! I would like to request your honorable presence mr/mrs: ' + guestList[i] + ', \non a dinner orgranized by, The Siddiqui Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n')
};

let absentGuest: string = 'Usman';
let newGuest: string = 'Abdul Ahad';
guestList[0] = newGuest ;
for (let i=0; i<guestList.length; i++) {
    console.log('Greetings! I would like to request your honorable presence mr/mrs: ' + guestList[i] + ', \non a dinner orgranized by, The Siddiqui Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n')
}
console.log(`Unfortunately, Mr.${absentGuest} will not be able to attend the dinner with us.`) */
var biryaniWeight = 20000;
var numberOfPeople = 84;
var biryaniPerPerson = biryaniWeight / numberOfPeople;
console.log("Biryani in grams per person will be: " + biryaniPerPerson);
