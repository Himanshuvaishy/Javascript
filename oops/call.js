function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);




// In JavaScript, the call() method is a built-in function available on all functions. It allows you to invoke a function with a specified this value and arguments provided individually.

// Here's the syntax:


// functionName.call(thisArg, arg1, arg2, ...);
// functionName: The function to be called.
// thisArg: The value to be passed as the this parameter to the function.
// arg1, arg2, ...: Optional arguments that the function accepts.
// When you call functionName.call(), it runs the function immediately with the specified this value and arguments.

// Here's an example:

// javascript
// Copy code
// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }

// const person = {
//   name: 'John'
// };

// greet.call(person); // Output: Hello, John!
// In this example, greet.call(person) calls the greet function with person as the this value inside the function. So, within the greet function, this.name refers to person.name, resulting in "Hello, John!" being logged to the console.

// The call() method is often used when you want to use a method from one object on another object, or when you want to explicitly set the this value in a function. It's particularly useful when working with functions that are designed to be generic and can operate on different objects.



