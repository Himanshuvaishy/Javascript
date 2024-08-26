
//implicit type conversion
// let result = "5" + 10;

// console.log(result);//510

// result = "5" - 2;

// console.log(result);//3
// result = true + 1;
result = 1+true ;
console.log(result);//2

// expliclit type conversion
// Converting a string to a number
let num = Number('123');  // 123

// Converting a number to a string
let str = String(123);  // '123'

// Converting a value to a boolean
let bool = Boolean(0); 
console.log(bool);
 // false

// Using parseInt and parseFloat for strings to numbers
let intNum = parseInt('123.45');  // 123
let floatNum = parseFloat('123.45');  // 123.45

// Converting to string using toString()
let numToStr = (123).toString();  // '123'

// falsy value --- false,"",0,nan,null,undefined