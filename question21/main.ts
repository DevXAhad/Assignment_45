// Question 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let things : string [] = ['car' , 'coldDrink' , 'person'];
//data types for person object, NOTE: An interface is a way to define a structure for an object
interface person {
    age : number ,
    nationality : string ,
    gender : string ,
    student : boolean ,
}
//assigning values to person object
let person : person = {
    age : 22,
    nationality : 'Pakistani', 
    gender : 'male',
    student : true,
}
//data types for car object
interface car {
    make : string,
    model : number,
    variant : string,
}
//assigning values to car object
let car : car = {
    make : 'porsche',
    model : 2024,
    variant : 'Taycan Supercharged V12'
}
//data types for Cold drink object
interface coldDrink  {
    brand : string,
    family: string,
}
//assigning values to Cold drink object
let coldDrink : coldDrink = {
    brand : 'Sprite',
    family : 'White',
}
console.log(car);
console.log(coldDrink);
console.log(person);