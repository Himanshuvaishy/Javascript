//console.log(x);// when I try to access variable x before intailize in case of var it give undefined due to Hoisting but in case of let and const it will give REFERENCE Error

//var x=40;
//let x=40;
//const xy=40;
// let x =30;
//let x=30;

function xyz(){
let x=40;
   // console.log(x);
  // var y=30;
   let z=20;

    if(true){
        //var y=20;// here y is function scoped
        var y=20; //  here y is blocked scope 
       // console.log(x);
       // console.log(y);
        let z=30;
        console.log(z);
        
        
        
    }
    console.log(z);
    
  //  console.log(y);// ! can access in case of var but not in case of let and const
    
    
}
xyz();

//console.log(x);

//  ! Feature	var	         let	const
   // Scope	Function/Global	Block	Block
// Reassignment	Allowed  	Allowed	Not allowed
// Hoisting	 Hoisted, initialized with undefined	Hoisted, not initialized	Hoisted, not initialized
