// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
/* let guestList: string [] = ['Usman', 'Zaid', 'Rayyan', 'Sufyan']
for (let i=0; i<guestList.length; i++) {
    console.log('Greetings! I would like to request your honorable presence mr/mrs: ' + guestList[i] + ', \non a dinner orgranized by, The Siddiqui Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n')
}; **/
var guestList = ['Ali', 'Zain', 'Rashid'];
for (var i = 0; i < guestList.length; i++) {
    console.log("Request your presence, Mr/Mrs ".concat(guestList, " on the annual dinner."));
}
