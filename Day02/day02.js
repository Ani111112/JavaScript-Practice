"use strict";

//convert string to number
let digit = "123";
console.log(typeof digit);

//this + sign will help to convert to the string to number
let numDigit = +digit;
console.log(typeof numDigit);


//convert number to string;
let strNum = 456;
console.log(typeof ("" + strNum));


//second way to convert string to number and number to string
console.log(typeof String(strNum));
console.log(typeof Number(digit));

//comperision operator
let digit1 = 123;
let digit2 = 123;
console.log(digit1 == digit2);
console.log(digit1 > digit2);
console.log(digit1 === digit2);