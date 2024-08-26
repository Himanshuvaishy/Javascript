 Q-what is Hoisting in js

 Hoisting in JavaScript is like lifting up all the variable and function declarations to the top of the code before it runs. This means you can use a variable or function before you actually write it out in the code, but only the declaration gets lifted, not the actual value you assign to it.


 For example:

Variables: If you try to use a variable before declaring it with var, JavaScript will see the variable as declared (but undefined) because it lifts the declaration to the top.

javascript
Copy code
console.log(x); // Output: undefined
var x = 5;
Functions: If you declare a function, you can call it before the code where you define it because JavaScript lifts the whole function to the top.

javascript
Copy code
greet(); // Output: Hello!

function greet() {
    console.log("Hello!");
}
But if you use let or const, or if you assign a function to a variable (called a function expression), JavaScript won’t let you use it before it’s declared or assigned.

So, hoisting lets you write your code more flexibly, but you have to be careful with how and when you use your variables and functions.


Q- Temporal DeadZone in js?
The Temporal Dead Zone (TDZ) is a period in your code where variables declared with let or const exist but cannot be used yet. If you try to use them before they are declared, you'll get an reference  error.

Simple Example
javascript
Copy code
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // Output: 10
Here, x exists from the start of the code, but you can't use it until the line let x = 10; is reached. The time before this line is the TDZ.

Why Does This Happen?
The TDZ helps prevent mistakes where you might try to use a variable before it's ready. It's like a protective barrier that says, "You can't use this variable yet because it hasn't been properly set up."

Summary
The Temporal Dead Zone is a safety feature that stops you from accidentally using let or const variables before they’re declared in your code.


Q-what is typeError , SyntxError and ReferenceError in javaScript?

1. TypeError
A TypeError happens when you try to do something with a value that doesn’t make sense, like calling a non-function as if it were a function or trying to use a method on something that doesn’t support it.

Example:

javascript
Copy code
const x = 5;
x(); // You can't call a number like a function, so this gives a TypeError.
2. SyntaxError
A SyntaxError happens when your code is written in a way that JavaScript doesn’t understand because it breaks the language's rules. It’s like making a typo in your code.

Example:

javascript
Copy code
console.log("Hello World"; // Missing the closing parenthesis causes a SyntaxError.
3. ReferenceError
A ReferenceError happens when you try to use a variable or function that doesn’t exist or hasn’t been declared yet.

Example:

javascript
Copy code
console.log(y); // If y hasn’t been declared, this will throw a ReferenceError.
Summary
TypeError: Using a value in a way that doesn’t make sense (like calling a number as a function).
SyntaxError: Writing code that JavaScript can’t understand because it breaks the rules (like missing a parenthesis).
ReferenceError: Trying to use something that doesn’t exist or isn’t declared yet.


Q- what is block ,scope and shodowing in js?

1. Block
A block in JavaScript is a section of code enclosed in curly braces {}. Blocks are used to group statements together. They can be used in functions, loops, conditionals, and more.

Example:

javascript
Copy code
{
  // This is a block
  let x = 10;
  console.log(x);
}
The code inside the curly braces {} is considered a block.

2. Scope
Scope refers to the accessibility of variables and functions in different parts of the code. It defines where you can access certain variables or functions. There are different types of scope in JavaScript:

Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

javascript
Copy code
let globalVar = "I'm global";

function example() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar); // Accessible here too

Function Scope: Variables declared inside a function are only accessible within that function.

javascript
Copy code

function example() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible here
}

console.log(localVar); // Error: localVar is not defined (not accessible here)

Block Scope: Variables declared with let or const inside a block (like an if statement or a loop) are only accessible within that block.

javascript
Copy code
if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error: blockVar is not defined (not accessible here)

3. Shadowing
Shadowing occurs when a variable declared within a certain scope (like a block or function) has the same name as a variable in an outer scope. The inner variable "shadows" or overrides the outer one within its scope.

Example:

javascript
Copy code
let x = 10; // Global variable

function example() {
  let x = 20; // This 'x' shadows the global 'x' inside this function
  console.log(x); // Output: 20
}

example();
console.log(x); // Output: 10 (the global 'x' remains unchanged)
In this example, the x inside the example function shadows the global x while inside the function, but the global x is unaffected outside the function.

Summary
Block: A piece of code enclosed in {}. It groups statements together.
Scope: The area in code where a variable or function can be accessed. There are global, function, and block scopes.
Shadowing: When a variable in a local scope has the same name as one in an outer scope, temporarily overriding the outer variable within that scope.

Q- what is illegal shodwing

Illegal shadowing occurs in JavaScript when you try to declare a variable with the same name as a variable in a higher scope using let or const in a way that violates certain rules. This generally happens when you attempt to shadow a variable that was declared with let or const in a higher scope by redeclaring it in the same scope with var.

Example of Illegal Shadowing
javascript
Copy code
let x = 10;

if (true) {
  var x = 20; // This is illegal shadowing
}
In this example:

x is first declared using let in the outer scope.
Then, inside the if block, you try to declare x again using var.
This is illegal because var does not have block scope; it hoists the declaration to the top of the function or global scope, which would collide with the let declaration in the outer scope. This leads to an error.

Why It’s Illegal
JavaScript disallows this kind of shadowing to prevent conflicts and unexpected behavior, as var declarations behave differently (they are hoisted and don’t respect block scope), which can cause confusion and bugs in your code.

What Happens?
If you try to do illegal shadowing like in the example above, you’ll get a SyntaxError because JavaScript won’t allow you to redeclare the variable in that way.

How to Avoid Illegal Shadowing
To avoid illegal shadowing:

Don’t mix var with let or const when using the same variable name.
Stick to let and const for block-scoped variables and ensure they are not redeclared in a way that violates the rules.
Summary
Illegal shadowing occurs when you try to declare a variable with var in a block scope when a variable with the same name is already declared in an outer scope using let or const. This is not allowed because var does not respect block scope, leading to potential conflicts and errors.