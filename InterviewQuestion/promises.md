Q-1 What are promises in JavaScript, and how do they work? Can you explain the difference between then(), catch(), and finally() in promises?

Promises in JavaScript

A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to write asynchronous code in a more manageable and readable way, avoiding issues like callback hell.


Key Concepts:

Pending: The initial state of a promise. It means the operation has not completed yet.
Fulfilled: The state when the operation has completed successfully, and the promise has a result (a resolved value).
Rejected: The state when the operation has failed, and the promise has a reason for failure (an error).

Creating a Promise:
A promise is created using the Promise constructor, which takes a function (executor) with two arguments: resolve and reject.

javascript
Copy code
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulate an operation result

    if (success) {
        resolve("Operation was successful!"); // Fulfilled
    } else {
        reject("Operation failed!"); // Rejected
    }
});
Handling Promises:
Promises are handled using the methods then(), catch(), and finally().

then():

Used to handle the result when a promise is fulfilled.
It takes two optional arguments: a callback for the resolved value and a callback for any error.
Example:
javascript
Copy code
myPromise.then(
    (value) => console.log(value), // Output: "Operation was successful!"
    (error) => console.log(error)
);
catch():

Used to handle errors when a promise is rejected.
It is essentially a shorthand for then(null, errorCallback).
Example:
javascript
Copy code
myPromise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error); // Output if rejected: "Operation failed!"
    });
finally():

This method is called regardless of whether the promise was fulfilled or rejected.
Useful for running cleanup tasks, like stopping loaders or closing connections.
Example:
javascript
Copy code
myPromise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation completed"); // Runs regardless of the outcome
    });
Example of a Promise with a Real-World Scenario:
Let’s say you’re fetching data from an API:

javascript
Copy code
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate API response
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
};

fetchData()
    .then((data) => {
        console.log(data); // "Data fetched successfully!"
    })
    .catch((error) => {
        console.log(error); // "Failed to fetch data."
    })
    .finally(() => {
        console.log("Fetch operation completed.");
    });
In this example:

fetchData() returns a promise that simulates an API call.
then() handles the success case.
catch() handles any errors.
finally() runs after the promise is either resolved or rejected, performing any necessary cleanup.

Why Use Promises?
Improves Readability: Promises help make asynchronous code easier to read and manage.
Avoids Callback Hell: By chaining .then(), .catch(), and .finally(), you can avoid deeply nested callbacks.
Error Handling: Promises provide a unified way to handle both success and failure cases.


1. Promise States
A promise can be in one of three states:

Pending: The initial state, where the promise has neither been fulfilled nor rejected.
Fulfilled: The state when the promise is resolved successfully. It means the asynchronous operation completed successfully.
Rejected: The state when the promise is rejected due to an error. It means the asynchronous operation failed.

2. Promise Constructor
The Promise constructor takes a function with two parameters:

resolve: A function to call when the promise should be fulfilled.
reject: A function to call when the promise should be rejected.
Example:

javascript
Copy code
const myPromise = new Promise((resolve, reject) => {
    let operationSuccess = true; // Simulate operation result
    if (operationSuccess) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
});

3. Promise Methods
then()
Purpose: Handles the case when a promise is fulfilled.
Parameters:
onFulfilled: A function to execute when the promise is resolved.
onRejected (optional): A function to execute when the promise is rejected.
Example:

javascript
Copy code
myPromise.then(
    (result) => {
        console.log(result); // Output: "Operation succeeded!"
    },
    (error) => {
        console.log(error); // Will not be called in this case
    }
);

catch()
Purpose: Handles the case when a promise is rejected.
Parameters:
onRejected: A function to execute when the promise is rejected.
Example:

javascript
Copy code
myPromise
    .catch((error) => {
        console.log(error); // Output if rejected: "Operation failed."
    });
    
finally()
Purpose: Executes a callback after the promise is settled, regardless of its outcome (fulfilled or rejected).
Parameters:
onFinally: A function to execute after the promise is settled.
Example:

javascript
Copy code
myPromise
    .finally(() => {
        console.log("Promise has been settled."); // Runs regardless of promise outcome
    });

4. Chaining Promises
Promises can be chained to perform multiple asynchronous operations in sequence. Each then() returns a new promise, allowing chaining.

Example:

javascript
Copy code
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
};

fetchData()
    .then((data) => {
        console.log(data); // "Data fetched"
        return "Processed data";
    })
    .then((processedData) => {
        console.log(processedData); // "Processed data"
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("All operations complete.");
    });

5. Promise.all()
Purpose: Takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved. It rejects if any of the promises reject.
Example:

javascript
Copy code
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // ["First", "Second", "Third"]
    })
    .catch((error) => {
        console.log("Error:", error);
    });

6. Promise.race()
Purpose: Takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
Example:

javascript
Copy code
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "First"));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "Second"));

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result); // "Second" (the first to resolve)
    });
7. Promise.allSettled()
Purpose: Takes an array of promises and returns a single promise that resolves after all of the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.
Example:

javascript
Copy code
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Failure");

Promise.allSettled([promise1, promise2])
    .then((results) => {
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Fulfilled:", result.value);
            } else {
                console.log("Rejected:", result.reason);
            }
        });
    });
Understanding promises helps in managing asynchronous operations effectively, leading to more readable and maintainable code.