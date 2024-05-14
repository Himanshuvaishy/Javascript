// immediately Invoked Function Expression
//(first bracket for fxn definition )( second bracket foe fxn execuation)


// (function chai(){
//   //  console.log(`this is a normal fxn function`);
// })();

// (()=>{
//    // console.log("this is in a arrow function")
// })();


// IIfE is a self-invoking function" or a "self-executing function".


// why it is used
// IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function.



(function() {
    // Code inside this function is isolated from the global scope
    var x = 10;
   // console.log(x);
    function foo() {
        ////console.log("Inside foo");
    }
    foo();
    
    // Variables and functions declared here are not accessible outside the IIFE
})();

// we can not access any varible and fxn which is inside the IIFO
// console.log(x);
// foo();

// In this example, x and foo() are scoped within the IIFE and cannot be accessed or modified from outside. This helps maintain a clean global scope and reduces the risk of naming conflicts or unintended side effects.

// Overall, IIFEs are a powerful tool for managing scope and promoting best practices in JavaScript development. They're commonly used in libraries, frameworks, and modern JavaScript codebases to ensure code integrity and maintainability.


// how to pass arguments  in IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Himanshu vaishy');