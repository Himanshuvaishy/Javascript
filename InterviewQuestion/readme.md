Q-1 What is the difference between let, var, and const in JavaScript?
Answer-
var
Scope: Function-scoped or globally scoped if declared outside a function.
Mutability: Can be reassigned a new value.
Hoisting: Variables are hoisted to the top of their scope, but initialized with undefined.
let
Scope: Block-scoped (within curly braces {}).
Mutability: Can be reassigned a new value.
Hoisting: Variables are hoisted to the top of their scope, but not initialized.
const
Scope: Block-scoped (within curly braces {}).
Mutability: Cannot be reassigned a new value once declared.
Hoisting: Variables are hoisted to the top of their scope, but not initialized.

Q-2 What is a closure in JavaScript, and how does it work?
A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned.

Q-3 what is lexical envirnoment?
 
A lexical environment in JavaScript is a data structure that stores the variables and functions that are defined in the current scope and all of the outer scopes. It is also known as the lexical scope or the lexical closure.

The lexical environment is created when a function is called and destroyed when the function returns.

// How it Works:
When JavaScript code executes, it creates a lexical environment for each scope (global, function, block). This environment stores the variables and functions declared within that scope.   

Important points:

The order of variable and function declarations doesn't matter due to hoisting, but their values are assigned when the code is executed.
When a variable is accessed, the JavaScript engine searches for it in the current lexical environment. If not found, it moves to the outer environment and continues until it finds the variable or reaches the global environment. This is called the scope chain.  


Q-4 Can you explain the difference between == and === in JavaScript?

JavaScript provides two comparison operators: == and ===. While they both compare values, they behave differently.

== (Loose Equality)
Compares values after performing type conversion if necessary.
Can lead to unexpected results due to type coercion. 
(coercion--दबाव)
It does not comapre data  type.

=== (Strict Equality)
Compares both values and data types.
No type conversion is performed.
Generally recommended for precise comparisons.

example 
let x = 10;
let y = '10';

console.log(x == y); // Output: true (because of type coercion)
console.log(x === y); // Output: false (different data types)

When you use the == operator in JavaScript, it performs a loose equality comparison. This means it compares the values of two operands, but it's willing to convert one or both operands to a common type before making the comparison. This process is known as type coercion(force) ;


Q-5 what is type conversion in js?

Answer---- Type conversion in JavaScript refers to the process of converting a value from one data type to another. JavaScript supports two types of type conversion:

Implicit Type Conversion (Type Coercion):

This happens automatically when JavaScript encounters different data types in an operation.
JavaScript tries to convert one or both of the values to a common type before performing the operation.
Examples:

javascript
Copy code
// String concatenation with numbers
let result = '5' + 10;  // '510' (number 10 is converted to a string)

// Addition with strings and numbers
result = '5' - 2;  // 3 (string '5' is converted to number 5)

// Boolean in arithmetic operations
result = true + 1;  // 2 (true is converted to 1)

Explicit Type Conversion:

This occurs when you manually convert a value from one type to another using functions or operators.
Examples:

javascript
Copy code
// Converting a string to a number
let num = Number('123');  // 123

// Converting a number to a string
let str = String(123);  // '123'

// Converting a value to a boolean
let bool = Boolean(0);  // false

// Using parseInt and parseFloat for strings to numbers
let intNum = parseInt('123.45');  // 123
let floatNum = parseFloat('123.45');  // 123.45

// Converting to string using toString()
let numToStr = (123).toString();  // '123'


Common Type Conversions:
1.String to Number:

Number('123') converts a string to a number.
parseInt('123.45') converts a string to an integer.
parseFloat('123.45') converts a string to a floating-point number.
2.Number to String:

String(123) converts a number to a string.
123 + '' is a quick way to convert a number to a string.
Boolean Conversion:

Boolean('text') returns true because non-empty strings are truthy.
Boolean(0) returns false because 0 is falsy.

Falsy and Truthy Values:
Falsy values: 0, "" (empty string), null, undefined, NaN, and false.
Truthy values: Any value that is not falsy, such as non-empty strings, non-zero numbers, etc.

Implicit Type Conversion in Conditionals:
In conditionals, JavaScript automatically converts values to boolean.
javascript
Copy code
if ('text') {
    console.log('This is truthy');  // This will run because 'text' is truthy
}
Understanding type conversion helps in writing cleaner and more predictable JavaScript code, avoiding unexpected behaviors due to implicit type coercion.{}




