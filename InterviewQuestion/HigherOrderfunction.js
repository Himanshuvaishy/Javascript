const numbers=[1,2,3];

const doubletheNumber=numbers.map((number)=>{
     return number*2;
});

//console.log(doubletheNumber);

// example 2

function createGreeting( greeting){
 return (name)=>{
     console.log(greeting + ","+ name);
     
 };
}

const sayHello=createGreeting("Hello");

//sayHello("Himanshu");


// combing concept Example

function filterArray(arr, isEven) {
     let result = [];
     for (let element of arr) {
         if (isEven(element)) {
             result.push(element);
         }
     }
     return result;
 }
 
 function isEven(number) {
     return number % 2 === 0;
 }
 
 const number = [1, 2, 3, 4, 5, 6];
 const evenNumbers = filterArray(number, isEven);

 console.log(evenNumbers); // Output: [2, 4, 6]

