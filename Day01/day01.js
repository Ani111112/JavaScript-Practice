"use strict";
//Printing to first Hello World Using Java Script
console.log("Hello World");

//Initilize veriable using var key word
var firstName = "Aniruddha";
console.log(firstName);

//change the value of firstName
firstName = "Arindam";
console.log(firstName);

//this is wrong in java script it will make a new variable with same name
//because we are using strict mode in java
// let firstName = "Pritam";
// console.log(firstName);

// initialize veriable using let keyword
let names = "Angshik";
console.log(names);

//assign new value in names
names = "Dipankar";
console.log(names);

//make constant variable
const lastName = "Mukherjee";
console.log(lastName);

//try to give new value to lastName
//it is wrong because it is constant variable we can't change the value of it
// lastName = "Saha";
// console.log(lastName);

//we can check the veriable type using type of
let digit = 10;
console.log(typeof digit);

//make sting to uppercase
let str = "JavaScript";
console.log(str.toUpperCase());

//make the same string to lowercase
console.log(str.toLowerCase());

//get the substing of a string
console.log(str.slice(0, 4));