 Q-1 What are arrow functions in JavaScript? How do they differ from regular functions, and when would you use them?
 
 An arrow function in JavaScript is a shorthand way to write a function using a special syntax introduced in ES6 (ECMAScript 2015). It allows you to write more concise function expressions, especially for functions that are simple or used as callbacks. 

 1. Syntax
Regular Function:

javascript
Copy code
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
Arrow Function:

javascript
Copy code
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
Explanation:

Arrow functions provide a shorter syntax. You don't need the function keyword, and if the function body contains just a single expression, you can omit the {} and return keyword, making it more concise.
2. this Binding
Regular Function:

javascript
Copy code
const person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet(); // "Hello, my name is Alice"
Arrow Function:

javascript
Copy code
const person = {
    name: 'Alice',
    greet: () => {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet(); // "Hello, my name is undefined"
Explanation:

In the regular function greet, this refers to the object person, so this.name correctly refers to "Alice".
In the arrow function greet, this doesn’t refer to person; instead, it refers to the lexical context in which the arrow function was defined. In this case, this refers to the global object, which doesn't have a name property, resulting in undefined.
3. Using Arrow Functions in Callbacks
Regular Function Example:

javascript
Copy code
const obj = {
    count: 0,
    incrementRegular: function() {
        setTimeout(function() {
            this.count++;
            console.log(this.count); // NaN or undefined behavior
        }, 1000);
    }
};

obj.incrementRegular();
Arrow Function Example:

javascript
Copy code
const obj = {
    count: 0,
    incrementArrow: function() {
        setTimeout(() => {
            this.count++;
            console.log(this.count); // 1
        }, 1000);
    }
};

obj.incrementArrow();
Explanation:

In the incrementRegular method, this inside the setTimeout callback is not referring to obj; it’s referring to the global object because setTimeout is a regular function. This often leads to unexpected behavior.
In the incrementArrow method, since arrow functions don’t have their own this, they inherit it from the surrounding context, which is obj in this case. So this.count++ works as expected.
4. Arrow Functions as Constructors
Regular Function:

javascript
Copy code
function Person(name) {
    this.name = name;
}

const alice = new Person('Alice');
console.log(alice.name); // "Alice"
Arrow Function:

javascript
Copy code
const Person = (name) => {
    this.name = name;
};

const alice = new Person('Alice'); // TypeError: Person is not a constructor
Explanation:

Regular functions can be used as constructors with the new keyword. They create a new object and set this to refer to that new object.
Arrow functions cannot be used as constructors, and trying to do so results in an error.
5. No arguments Object in Arrow Functions
Regular Function:

javascript
Copy code
function sum() {
    console.log(arguments);
    return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
Arrow Function:

javascript
Copy code
const sum = (...args) => {
    console.log(args);
    return args.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum(1, 2, 3, 4)); // 10
Explanation:

Regular functions have an arguments object that contains all the arguments passed to the function.
Arrow functions do not have their own arguments object. Instead, they rely on the rest parameters (...args) if you need to access the function's arguments.
When to Use Arrow Functions:
Simple Callbacks: Arrow functions are great for simple callbacks or for when you need to maintain the this context of the surrounding scope, such as in event handlers or array methods like map, filter, etc.
Avoiding this Confusion: Use arrow functions when you want to avoid confusion with the this keyword, especially in nested functions.
No Need for Constructors: Use arrow functions when you don’t need the function to be used as a constructor.