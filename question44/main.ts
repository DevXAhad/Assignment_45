// Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function ingredients(...toppings: string[]){
   console.log(`Sandwich ingredients: `)
   for (let i = 0; i < toppings.length; i++) {
    console.log(`- ${toppings[i]}`)
   }
}
ingredients('Capsicum', 'Tomatoes', 'Lettuce', 'Olives', 'Chicken\n')
ingredients('BBQ Sauce' , 'Mayochup', 'Beef', 'Honey Mustard\n')
ingredients('Mayo', 'Thousand Island', 'Pickles', 'Cheese')
console.log("\nBon Appetite, Abdul Ahad :)")