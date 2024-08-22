   //eventloop:-
   //An event loop in JavaScript is a mechanism that processes tasks in a non-blocking manner. It ensures that JavaScript code executes efficiently without freezing the user interface.  



// first case when we have to only execute  marco task .
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback1");
}, 0);

console.log("End");
//output
//Start
//End
//Timeout callback


// In this case when we have micro task queue to execute

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("End");


//output
// Start
// End
// Promise callback
// Timeout callback