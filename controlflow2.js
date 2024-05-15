// const month=3;

// switch (month) {
//     case 1:
//         console.log("january");
        
//         break;
//     case 2:
//         console.log("febuary");
        
//         break;
//     case 3:
//         console.log("march");
        
//         break;
//     case 4:
//         console.log("April");
        
//         break;

//     default:
//         break;
// }

//if break keyword is not present in the case then it will execute all code except default


// falsy value
//  0,false,-0,BigInt On, null,undefined,NaN,""; except this all value is  truty value;\


// let num="";

// if(num){
//     console.log("number is prsent so it is truty value");
// }else{
//     console.log("not a truty value");
// }

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// // Nullish Coalescing Operator (??): null undefined
//The nullish coalescing operator ?? returns its right-hand operand when its left-hand operand is null or undefined, and otherwise, returns its left-hand operand.




// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1);

// // Terniary Operator

// // condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")






