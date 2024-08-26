

// ! Definition:
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables—even after the outer function has finished executing.

// !How it works:

// When a function is created inside another function, the inner function forms a closure. This closure includes the inner function's own scope, the scope of the outer function, and the global scope.
// Because of this, the inner function can access variables declared in the outer function, even after the outer function has returned.
  

function outerFunction() {
    let outerVariable = 'I am from outerFunction';

    function innerFunction() {
       // console.log(outerVariable);
    }

    return innerFunction; //if here we will not return the innerFunction and line excuted just below  then due to lexical scope we can access outerVariable  in innerFunction.

   // innerFunction();// 
  //!  The lexical environment is created when a function is called and destroyed when the function returns.
}

const myClosure = outerFunction();
myClosure(); // Output: 'I am from outerFunction'

// !Use Cases:
// ?Encapsulation: Closures are often used to create private variables or functions that cannot be accessed from outside the function.
function Counter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

const myCounter = Counter();

console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.getValue());  // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.count);       // undefined (count is private)


//?Callbacks and Event Handlers: Closures are commonly used in asynchronous code, such as callbacks or event handlers, where the callback function retains access to variables from its containing function.

