// Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicianName: string[]){
    magicianName.forEach(element => {
     console.log(element);   
    });
}
function make_great(magicians: string []) {
for (let i=0;i<magicians.length;i++){
    magicians[i] = magicians[i] + ', The Great.';
}
}
const magicians1: string [] = ['Jacob', 'Daniel', 'Harvey'];
show_magicians(magicians1)
make_great(magicians1);