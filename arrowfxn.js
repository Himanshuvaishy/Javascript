// about this keyword
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// In the context of an object method in JavaScript, the this keyword refers to the object itself, allowing access to its properties and methods within the method's scope. It facilitates interaction with the object's data and behavior, providing a way to access and manipulate its state.

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

//  //console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}


 chai()
// <-------------------------------------------------------------->

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = () => ({ username: "hitesh" })


//console.log(addTwo())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()