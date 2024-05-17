const buttons = document.querySelectorAll(".button");
//  console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', function (e) {
       console.log(e);
       
        
        if (e.target.id === 'grey' || 'white'|| 'blue '||'yellow') {
            body.style.backgroundColor =e.target.id;
        }
        // if (e.target.id === 'white') {
        //     body.style.backgroundColor = "white";
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }


    })
}

)


