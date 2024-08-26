What are the different data types in JavaScript?

Primitive Data Types
These are the basic building blocks in JavaScript. Each primitive data type represents a single value.

Number

What it is: This type is used for any kind of number, whether it's a whole number (like 1, 2, 3) or a number with decimals (like 3.14).
Example:
javascript
Copy code
let age = 25; // a whole number
let pi = 3.14; // a decimal number
String

What it is: A string is a sequence of characters, like letters, numbers, and symbols, all put together. We use strings to represent text.
Example:
javascript
Copy code
let name = "Rohit"; // a string of characters
let greeting = 'Hello, World!'; // another string
Boolean

What it is: A boolean represents a value that can only be true or false. It's used to make decisions in the code.
Example:
javascript
Copy code
let isStudent = true; // yes, the person is a student
let hasGraduated = false; // no, the person hasn't graduated yet
Undefined

What it is: If you create a variable but don't give it a value, its value is undefined. It means "nothing has been set yet."
Example:
javascript
Copy code
let myVariable;
console.log(myVariable); // undefined, because no value is set
Null

What it is: null is a value that represents "nothing" or "empty." It's used when you want to say that a variable should have no value.
Example:
javascript
Copy code
let emptyValue = null;
Symbol (Advanced)

What it is: Symbols are unique values used to create unique identifiers. They're a bit more advanced and used less often in simple coding.
Example:
javascript
Copy code
let mySymbol = Symbol('unique');
BigInt (Advanced)

What it is: BigInt is for really big numbers, bigger than what the regular Number type can handle. It's used when you need to work with large numbers without losing precision.
Example:
javascript
Copy code
let largeNumber = 123456789012345678901234567890n;
Non-Primitive (Reference) Data Types
These types can hold collections of values or more complex data.

Object

What it is: An object is a collection of properties, where each property has a name (or key) and a value. Objects are used to group related data together.
Example:
javascript
Copy code
let person = {
  name: "Rohit",
  age: 25,
  isStudent: true
};
// 'person' is an object with three properties
Array

What it is: An array is a list of values stored in a single variable. Each value has a position in the list, starting from 0.
Example:
javascript
Copy code
let colors = ["red", "green", "blue"];
// 'colors' is an array containing three strings
Function

What it is: A function is a piece of code that you can reuse. You write it once, and then you can "call" it whenever you need to perform that action.
Example:
javascript
Copy code
function greet() {
  console.log("Hello, World!");
}
greet(); // calls the function and prints "Hello, World!"
Date

What it is: The Date object is used to work with dates and times.
Example:
javascript
Copy code
let today = new Date(); // gets the current date and time
RegExp (Advanced)

What it is: Regular Expressions (RegExp) are patterns used to match text. They are used for searching and replacing text in strings.
Example:
javascript
Copy code
let pattern = /hello/;
let testString = "hello world";
console.log(pattern.test(testString)); // true
Map and Set (Advanced)

What they are: These are new ways to store collections of data. A Map is a collection of key-value pairs, and a Set is a collection of unique values.
Example:
javascript
Copy code
let myMap = new Map();
myMap.set('name', 'Rohit');

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // won't be added again because 2 is already in the set
Special Values
NaN: Stands for "Not-a-Number". It’s a value that appears when you try to do something mathematical that doesn't make sense.
Example: let result = "hello" / 2; // result is NaN
Infinity and -Infinity: These represent positive and negative infinity, usually when you divide a number by 0.
Example: let result = 1 / 0; // result is Infinity
Summary
Primitive types are simple values like numbers, text, and true/false values.
Non-Primitive types include more complex structures like objects, arrays, and functions, which can hold multiple values or perform actions.