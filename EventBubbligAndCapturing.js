document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("call grandparent");
});



//  let child=document.querySelector("#child").addEventListener("click",function (e){
//   },true)
// child.ClassList.add(color);


 const parentdiv=document.querySelector("#parent").addEventListener("click",function (e){
 
    console.log("clicked the parent");
    parentdiv.style.backgroundColor ="green";

},true)

const divchild=document.querySelector("#child")

divchild.addEventListener("click",()=>{
    divchild.style.backgroundColor = "blue";
    console.log("child clicked")
})


// third arguments is useCapture in eventListner it takes the boolean value , if the usecapture is true it perform the Event capturing else it perform the event bubbling 
// by default the useCapture is false so it perform bubbling

// in the cycle of event propogation first it perform capturing then it goes for bubbling

// so for avoiding this propogation we use stoppropogation() method 
   
