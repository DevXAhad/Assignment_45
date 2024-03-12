// Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size:string = 'Large', size1:string = 'Medium', text:string = 'I love typescript', size3: string = 'X-Large', text1: string = 'This is an X-Large sized shirt'){
    console.log(`The sizes of the shirt are: ${size} and ${size1}. \nThe message printed on them are: ${text}.\n \nClick here for an ${size3} sized shirt and\nThe message printed on it would be: \n${text1}.`)
}
make_shirt();