// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
 //myArr.shift()
// console.log(myArr.shift());
// console.log(myArr.shift());
// console.log(myArr.unshift(10));
// console.log(myArr);


//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// const array=["him","vaishy","gupta"];
// console.log( typeof array.join());


// slice, splice

//console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// //console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)

// console.log(myn2);
// console.log("C ", myArr);

// slice does not mutate the original array
// splice mutate the original array

const months = ['Jan', 'March', 'April', 'June'];
months.splice(2, 1, 'May ,sep');
// Replaces 1 element at index 4
console.log(months);
months.splice(1,0,'feb');
console.log(months);
months.splice(3,0,'aprile')
console.log(months);
months.splice(4,1);
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
