// Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicianNames: string[]) {
    magicianNames.forEach(name => {
        console.log(name);
    });
}

function make_great(magicians: string[]) {
    const newMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        newMagicians.push(magicians[i] + ', The Great.');
    }

    return newMagicians;
}

const magiciansOriginal: string[] = ['\nJacob', 'Daniel', 'Harvey'];
const magiciansWithGreat: string[] = make_great([...magiciansOriginal]);
show_magicians(magiciansOriginal); 
show_magicians(magiciansWithGreat);