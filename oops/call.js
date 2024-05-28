// The call() method is often used when you want to use a method from one object on another object, or when you want to explicitly set the this value in a function. It's particularly useful when working with functions that are designed to be generic and can operate on different objects.

let name ={
    firstName:"Himanshu",
    LastName:"vaishy",
    
} 
function printName(hometown){
    console.log(this.firstName + ", " + this.LastName+"  from  "+
    hometown);
 }

  printName.call(name,"lucknow");

  let name2 = {
    firstName:"Him",
    LastName:"gupta",
  }
// here we are borrowing function from another object
//   name.printName.call(name2);

// apply

printName.apply(name2,["amethi"]);
// call() and apply() both let you specify the context in which a function is called, call() expects arguments individually, whereas apply() expects them as an array. This makes apply() useful when you have an array of arguments or when you want to dynamically pass arguments to a function.

// bind

//the only differnce b/t call and bind is call inkove directly while in bind we  bind and a function into a variable and inove them later

 let printFullName =printName.bind(name,"agra");
 console.log(printFullName);
 printFullName();





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



