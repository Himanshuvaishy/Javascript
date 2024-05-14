function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
 //console.log(calculateCartPrice(200, 400, 500, 2000));

const user1={
    username:"gutpa"
}


 const user = {
    username:"Hiamsnhu",
    prices:199
 }


 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price of the item is ${anyobject.prices}`);
 }

 //console.log(handleObject(user));
 //handleObject(user);
 //handleObject(user1);

// direct pass the obj inside argument
//  handleObject({
//     username:"sam"
//  });


const myNewArray=[200,400,100,600];

function returnSecondValue(getArray){
return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300]));
