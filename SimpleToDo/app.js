let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let Delbtns = document.createElement("button");
  Delbtns.innerText = "Delete";
  Delbtns.classList.add("delete");
  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);
  item.appendChild(Delbtns);
  inp.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
  }
});

//  let btnofDel=document.querySelectorAll(".delete")
//  for(delbtn of btnofDel){
//   delbtn.addEventListener("click",()=>{
//     let par=this.parentElement;
//     par.remove();
//   })
//  }
