let buttons = ["map","for Each", "filter"," reduce", "find", "findIndex", "some","sort" ]
let buttons2 = buttons.map((button)=> button.toUpperCase())
console.log(buttons2);


let dibujar_buttons = (array)=>{
    let stringHTML = ""
    array.forEach((el)=>{
        stringHTML += `<div class="col"><button type="button" class="btn btn-outline-primary">${el}</button></div>`
    })
    return stringHTML
}
let container_buttons = document.getElementById("container-buttons");
//botones = dibujar_buttons(buttons2);
container_buttons.innerHTML = dibujar_buttons(buttons2);
console.log(container_buttons);



