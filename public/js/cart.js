// Funcionalidad botones + y -
const addButtonList = document.querySelectorAll(".custom-increment");
const subtractButtonList = document.querySelectorAll(".custom-decrement");
const quantityInputList = document.querySelectorAll(".custom-text");
const deleteButtonList = document.querySelectorAll(".delete_item_svg")

addButtonList.forEach((addButton, index) => {
  const subtractButton = subtractButtonList[index];
  const quantityInput = quantityInputList[index];
  const deleteButton = deleteButtonList[index]

  addButton.addEventListener("click", () => {
    quantityInput.value = Number(quantityInput.value) + 1;
    updateTotal(index); // Actualizar el total 
    sendUpdateToBackend(index, quantityInput.value);
  });

  subtractButton.addEventListener("click", () => {
    if (Number(quantityInput.value) > 1) {
      quantityInput.value = Number(quantityInput.value) - 1;
      updateTotal(index); // Actualizar el total 
      sendUpdateToBackend(index, quantityInput.value);
    }
  });

  // Evitar que se pongan números negativos en el campo
  quantityInput.addEventListener('change', () => {
    quantityInput.value = Number(quantityInput.value) < 1 ? 1 : Number(quantityInput.value);
    updateTotal(index); // Actualizar el total al cambiar el valor
    sendUpdateToBackend(index, quantityInput.value);
  });

  // Borrar un item de la lista
  deleteButton.addEventListener("click", () => {
    const itemContainer = deleteButton.closest(".rad_shad_container.cart_item"); 
    deleteItemToBacked(index);
    itemContainer.remove();
});
});

// Función para actualizar el total
function updateTotal(index) {
  const cartQuantity = document.querySelectorAll(".custom-text")[index].value;
  const price = document.querySelectorAll(".cart_item_price")[index].innerText.split("$")[1];
  const totalSpan = document.querySelectorAll(".total_text_item")[index];

  // Calcular el total con dos decimales
  const total = (cartQuantity * price).toFixed(2);
  totalSpan.innerText = `$${total}`;
};

// ENVIAR DATA AL BACK

function sendUpdateToBackend(index, newQuantity) {
  const productIds = document.querySelectorAll(".product_id");
  const productId = productIds[index].innerText;
  const apiUrl = `/shop/cartupdate?id=${productId}&quantity=${newQuantity}`;

  fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ quantity: newQuantity }),
  })
  .then(response => {
        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
        return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error en la solicitud:', error));
};

function deleteItemToBacked(index) {
  const productIds = document.querySelectorAll(".product_id");
  const productId = productIds[index].innerText;
  const apiUrl = `/shop/cartupdate/delete/${productId}`;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ quantity: newQuantity }),
})
.then(response => {
    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
    return response.json();
})
.then(
  data => console.log(data)
)
.catch(error => console.error('Error en la solicitud:', error));
};
