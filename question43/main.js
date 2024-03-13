var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicianNames) {
    magicianNames.forEach(function (name) {
        console.log(name);
    });
}
function make_great(magicians) {
    var newMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        newMagicians.push(magicians[i] + ', The Great.');
    }
    return newMagicians;
}
var magiciansOriginal = ['\nJacob', 'Daniel', 'Harvey'];
var magiciansWithGreat = make_great(__spreadArray([], magiciansOriginal, true));
show_magicians(magiciansOriginal);
show_magicians(magiciansWithGreat);
