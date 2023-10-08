const add=document.querySelector("#add");
const subtract=document.querySelector("#subtract");
const quantity=document.querySelector("#esteban");

add.addEventListener("click",()=>quantity.value=Number(quantity.value)+1);
subtract.addEventListener("click",()=>quantity.value=Number(quantity.value)-1);
   

