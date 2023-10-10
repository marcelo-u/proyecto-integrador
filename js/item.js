const add=document.querySelector("#add");
const subtract=document.querySelector("#subtract");
const quantity=document.querySelector("#campo_numerico");

add.addEventListener("click",()=>quantity.value=Number(quantity.value)+1);

subtract.addEventListener("click",() => {
    if (Number(quantity.value) > 0) {
(quantity.value=Number(quantity.value)-1);   
    }
});

