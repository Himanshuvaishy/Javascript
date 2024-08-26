// console.log(a);//! a is hoisted but in temporal zone so when we try to acces it give reference error
// In case of var it log undefined 

// let a=15;//! re daclared  value in a variable is possible in case of let but not in case of const
// In case of var we can redecalred same variable name and assigned value 
// var a=10
// var a=20; //? it is possible in var only 
// let a= 10;
//let a=20; //? declaring same variable name in case of let and const is not possible 
// a=40;
// console.log(a);


if(true){
  let a=10;
  var v=20;
  console.log(a);
  console.log(v);
  
  
    
}
console.log(v);
console.log(a);

// let x = 10;

if (true) {
  var x = 20; // This is illegal shadowing and cause of syntax error .
} 




