// method Context

const person = {
    name: 'Alice',
    greet() {
        console.log(this.name);
      
    },
};
//!person.greet(); 

//! constructor functions

function Person(name){
    this.name=name;
   // this.x=name; we can also write like this instead of name we access using x
}

const bob=new Person('Bob');
const sob=new Person('Him')
//console.log(bob);// log object
//console.log(bob.x);// log name of obj
//  console.log(sob);
//  console.log(sob.name);

 //console.log(bob==sob);// false


 //!Arrow function
 const person1 = {
    name: 'Alice',
    greet: () => {
        console.log(this.name);
    }
};
//person1.greet();  // Logs `undefined` because `this` refers to the global object


//! Explicit Binding
function greet() {
    console.log(this.name);
}

const person2 = { name: 'Bob' };
//greet.call(person2);  // Logs 'Bob'


//!  Example 1: Nested Arrow Functions Inheriting this

const user = {
    name: 'Himanshu',
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);

        const getGreeting = () => {
            console.log(`Greeting from ${this.name}!`);
        };

        getGreeting();  // This will work because `this` is inherited from `greet` method
    }
};

//user.greet();
// Output:
// Hello, my name is Himanshu.
// Greeting from Himanshu!






     



// !Example 2: Multiple Nested Arrow Functions
const person3 = {
    name: 'Alice',
    sayHello: function() {
        const outerArrow = () => {
            const innerArrow = () => {
                console.log(`Hello, ${this.name}`);
            };
            innerArrow();
        };
        outerArrow();
    }
};

//person3.sayHello();  // Output: "Hello, Alice"



// !Example 3: Nested Arrow Functions with a Callback

const developer = {
    name: 'Bob',
    languages: ['JavaScript', 'Python', 'C++'],
    printLanguages: function() {
        this.languages.forEach((language) => {
            const display = () => {
                console.log(`${this.name} knows ${language}`);
            };
            display();
        });
    }
};

//developer.printLanguages();
// Output:
// Bob knows JavaScript
// Bob knows Python
// Bob knows C++

//! -- why arow function does not have their own this ----
  

// Example with a Regular Function:
function Timer() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;  // `this` is undefined or refers to the global object
        console.log(this.seconds);
    }, 1000);
}
//const timer = new Timer(); 
//console.log(timer);
 // This won't work as expected

 //Workaround with bind:
 function Timer() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;
        console.log(this.seconds);
    }.bind(this), 1000);  // `this` is explicitly bound to the Timer instance
}
//const timer1 = new Timer();


//Simplified with Arrow Functions:

function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;  // `this` refers to the Timer instance, no binding needed
        console.log(this.seconds);
    }, 1000);
}
//const timer = new Timer();  // Works as expected

 // !Consistency in Object-Oriented Code:
class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
}
const counter = new Counter();
counter.increment();  // Works as expected, `this` refers to the Counter instance





 
 
 
