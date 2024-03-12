// Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log("The size of the shirt is: ".concat(size, " and the message printed on it is: ").concat(text, "\n"));
}
make_shirt('\nSmall,', '\nThis is a Small sized shirt.');
make_shirt('\nMedium,', '\nThis is a Medium sized shirt.');
make_shirt('\nLarge,', '\nThis is a Large sized shirt.');
