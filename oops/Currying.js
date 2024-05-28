// two way prrform fxn currying

// 1st way is using bind method
// let multiply = function (x,y){
//     console.log(x*y);
// }

// 2nd way is clouser

let multiply =function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo=multiply(3)
multiplyByTwo(5);


// let multiplyByTwo2=multiply.bind(this);
// multiplyByTwo2(3,9); 