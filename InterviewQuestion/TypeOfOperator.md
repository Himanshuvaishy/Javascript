Q-What is the purpose of the typeof operator?

The typeof operator in JavaScript is used to determine the data type of a given variable or expression. It helps you understand what kind of value you're working with, which is especially useful for debugging and ensuring that your code behaves as expected.

How to Use typeof
You simply use the typeof operator followed by the variable or value you want to check. The syntax is:

javascript
Copy code
typeof variable_or_value;

What typeof Returns

The typeof operator returns a string that describes the type of the operand (the variable or value being checked). Here are the possible return values:

"number": If the value is a number (whether an integer or floating-point).

Example:
javascript
Copy code
typeof 42; // "number"
typeof 3.14; // "number"
"string": If the value is a string.

Example:
javascript
Copy code
typeof "hello"; // "string"
typeof 'world'; // "string"
"boolean": If the value is a boolean (true or false).

Example:
javascript
Copy code
typeof true; // "boolean"
typeof false; // "boolean"
"undefined": If the variable has been declared but not assigned a value, or if a function does not return anything.

Example:
javascript
Copy code
let x;
typeof x; // "undefined"
typeof someUndefinedVariable; // "undefined"
"object":

If the value is an object, an array, or null (with null being a special case that returns "object" due to a historical bug in JavaScript).
Example:
javascript
Copy code
typeof { name: "Rohit" }; // "object"
typeof [1, 2, 3]; // "object"
typeof null; // "object" (this is a special case, `null` is actually not an object)
"function": If the value is a function.

Example:
javascript
Copy code
function greet() {
  console.log("Hello");
}
typeof greet; // "function"
"symbol": If the value is a symbol (a unique and immutable primitive introduced in ES6).

Example:
javascript
Copy code
let sym = Symbol("id");
typeof sym; // "symbol"
"bigint": If the value is a BigInt (a special numeric type for working with large integers introduced in ES2020).

Example:
javascript
Copy code
let bigNumber = 123456789012345678901234567890n;
typeof bigNumber; // "bigint"


Common Use Cases for typeof
Checking for Uninitialized Variables: You can use typeof to check if a variable has been defined or initialized.

Example:
javascript
Copy code
if (typeof someVariable === "undefined") {
  console.log("someVariable is not defined");
}
Handling Different Data Types: When you need to handle different types of data in different ways, typeof can help you decide which operation to perform.

Example:
javascript
Copy code
let value = "123";
if (typeof value === "string") {
  value = parseInt(value);
}
Debugging: During debugging, typeof is handy to check the type of a variable and ensure it's what you expect.

Limitations
As mentioned, typeof null returns "object", which can be confusing since null is not an object.
Arrays also return "object" with typeof, even though they are technically a different type of object.
Summary
The typeof operator is a simple yet powerful tool in JavaScript that helps you identify the data type of a variable or expression. It returns a string indicating the type, making it easier to write dynamic and robust code.