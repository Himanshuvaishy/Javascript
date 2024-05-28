let name = {
    firstNmae:"Himanshu",
    lastName:"vaishy"
}

let printName =function (){
    console.log(this.firstNmae+" ,"+this.lastName);
}



// creating my bind method
Function.prototype.myBind = function(...args){
    let obj=this,
    params=args.slice(1);
    return function (...args2) {
        obj.apply(args[0],[...params,...args2])
    }
}
let printMyNmae2 = printName.myBind(name,"dehradun")
printMyNmae2()

