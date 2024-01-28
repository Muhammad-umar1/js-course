// 'use strict'
//Two types of datatypes

//1: Premitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//2: Non_Premitive or Reference
//Array, Objects and Functions

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
// JavaScript is a dynamically typed language, but TypeScript is a statically typed language

// const id = Symbol("123");
// const anotherId = Symbol("123");

// // because the Symbol assign a unique key to it

// console.log(id === anotherId); // false 
// console.log(id == anotherId); //false

//BigInt
const bigNumber = 34897384753745827n  // due to n it become Bigint
// console.log(typeof bigNumber);


// const arr = ["umar", "khan"];
// console.log(typeof arr); // object


// const fnt = function () { 

// }
// console.log(typeof fnt); // function

// console.log(18 == 018); // true
// console.log(08 == '08'); // true 
console.log(017 == "017"); // false
// console.log(Number(010)); // 8 beacuse of octal literal