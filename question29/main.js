"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array. Make a array of your three favorite fruits and call it favorite_fruits. Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favourite_fruits = ['Apple', 'Banana', 'Mango'];
if (favourite_fruits.includes('Apple')) {
    console.log("\nAn Apple a day keeps the doctor away.");
}
if (favourite_fruits.includes('Banana')) {
    console.log("A banana is enriched with many kinds of vitamins.");
}
if (favourite_fruits.includes('Mango')) {
    console.log("I really wish mangoes were available throughout the whole year.");
}
if (favourite_fruits.includes('Strawberry')) {
    console.log("Strawberries are cute.");
}
if (favourite_fruits.includes('Peach')) {
    console.log("Peaches grow on trees and their fuzzy skin protects them from pests and the environment.");
}
