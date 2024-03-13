// Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicianName = ['John', 'Steve', 'Charles'];
function show_magicians(magicianName) {
    magicianName.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magicianName);
