// Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function ingredients() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("First Sandwich ingredients: ");
    for (var i = 0; i < toppings.length; i++) {
        console.log("- ".concat(toppings[i]));
    }
}
ingredients('Capsicum', 'Tomatoes', 'Lettuce', 'Olives', 'Chicken\n');
ingredients('BBQ Sauce', 'Mayochup', 'Beef', 'Honey Mustard\n');
ingredients('Mayo', 'Thousand Island', 'Pickles', 'Cheese');
console.log("\nBon Appetite, Abdul Ahad :)");
