// DataType convertion

// // test 1
// let score = "333";

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log("string to number: ", typeof valueInNumber); // string to number:  number

// test2
// let score = null;
// let score = Nan;
// let score ;
// let score = "33";
// let score = "33aa";
// let score = true;

// console.log(typeof score); // string
// console.log(typeof Number(score)); // it convert the string "33aa' value into number but it has the string valur "aa"
// console.log("the string to Number", Number(score) ); //the string to Number NaN

// convertion from any type to Number datatype
//type value => value in number : type after convertion
//   "33"    =>   33   :    number
//   "33aa"  =>   NaN  :    number
//   true    =>   1    :    number
//   false   =>   0    :    number
//   ""      =>   0    :    number
//  let score;=>  NaN  :    number
//   null    =>   0  :    number

// console.log(Number(null) === Number(false));  // true
// console.log(Number("") === Number(false));  // true

// // convertion from any type to Boolean datatype

// let stringNumberValue = "2";  // true
// let stringValue = "umar"; // true
// let numberValue = 1; // true
// let stringEmtpyValue = ""; // false

// let booleanValue0 = Boolean(stringNumberValue); // true
// let booleanValue1 = Boolean(stringValue); // true
// let booleanValue2 = Boolean(numberValue); // true
// let booleanValue3 = Boolean(stringEmtpyValue); // false

// console.table( {StringNumberToBoolean : booleanValue0, numberToBoolean : booleanValue1, stringToBoolean : booleanValue2, EmptyStringToBoolean : booleanValue3}); // true

// convertion from any type to String datatype

let numberValue = 222;
let stringValue = "umar"; 
let nullVlaue = null; 
// let stringEmtpyValue = ""; // false

let tostringValue = String(numberValue); // type: string
let toStringValue1 = String(stringValue); // 
let toStringNullValue2 = String(nullVlaue); 
// let booleanValue3 = Boolean(stringEmtpyValue); // false

console.table({
    StringNumber: typeof tostringValue, // string
    StringString: typeof toStringValue1, // string
    StringNull: typeof toStringNullValue2, // string
  }); 
console.table({
  StringNumber: tostringValue, 
  StringString: toStringValue1,
  StringNull: toStringNullValue2,
}); 
