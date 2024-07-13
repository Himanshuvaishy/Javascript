//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c=200;
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
       // console.log(username);
    }
    // console.log(website);

     two()

}

 one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// hoisting concept

console.log(addone(5))
// let ab=addone(2)
// console.log(ab);

function addone(num){
    return num + 1
}



//addTwo(5)
const addTwo = function(num){
    return num + 2
}
