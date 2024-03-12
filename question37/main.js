// Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, size1, text, size3, text1) {
    if (size === void 0) { size = 'Large'; }
    if (size1 === void 0) { size1 = 'Medium'; }
    if (text === void 0) { text = 'I love typescript'; }
    if (size3 === void 0) { size3 = 'X-Large'; }
    if (text1 === void 0) { text1 = 'This is an X-Large sized shirt'; }
    console.log("The sizes of the shirt are: ".concat(size, " and ").concat(size1, ". \nThe message printed on them are: ").concat(text, ".\n \nClick here for an ").concat(size3, " sized shirt and\nThe message printed on it would be: \n").concat(text1, "."));
}
make_shirt();
