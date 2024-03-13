// Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicianName: string [] = ['John', 'Steve', 'Charles'];
function show_magicians(magicianName: string[]){
magicianName.forEach(element => {
 console.log(element);   
});
}
show_magicians(magicianName);