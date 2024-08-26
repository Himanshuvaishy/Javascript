//! Example 1
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved!");
//     }, 2000);
//     console.log("hlo");
    
//   });
  
//   promise.then((message) => {
//     console.log(promise);
    
//     console.log(message);
//   });
//   console.log(promise);
  
  
//   console.log("End of script");

// !Example2
//   async function fetchData() {
//     console.log("Fetching data...");
//    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const data = await response.json();
// //     const response1 = await fetch("https://jsonplaceholder.typicode.com/comments");
// //     const data1 = await response1.json();
// //    for (const element of data1) {
// //     console.log(element);
    
// //    }
// console.log(data[0]);


   
//    console.log("hlo");
    
//   }
  
//   fetchData();
//   console.log("End of script");


  // !Garbage collector 


  function createUser() {
    let user = { name: "Himanshu",surname:"vaishy" }; // Memory allocated for 'user'
    return user;
  }
  
  let user1 = createUser(); // 'user1' holds a reference to the object
  let user2 = createUser(); 
 // console.log(user1==user2);
 //console.log(user1.surname);
 
  // 'user2' holds a reference to a new object
  
  user1 = null; // Now the first object is unreachable
  // At some point, the garbage collector will run and free the memory used by the first object.
 // In the above example, once user1 is set to null, the object it referenced becomes unreachable, and the garbage collector will eventually reclaim the memory.
  
  