// Obtener elementos del DOM
const promocodeInput = document.getElementById('promocode');
const promocodeIcon = document.getElementById('promocode-icon');
const quantityIcons = document.querySelectorAll('.quantity-icon');
const quantityElements = document.querySelectorAll('.quantity');
const subtotalElements = document.querySelectorAll('.subtotal');
const totalElement = document.getElementById('total');

// Agregar evento clic al icono del código promocional
promocodeIcon.addEventListener('click', () => {
  const promocode = promocodeInput.value;
  // Aquí puedes implementar la lógica para aplicar el código promocional
  console.log('Código promocional:', promocode);
});

// Agregar evento clic a los iconos de cantidad
quantityIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const action = icon.dataset.action;
    const quantityElement = icon.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    if (action === 'increase') {
      quantity++;
    } else if (action === 'decrease') {
      quantity = Math.max(0, quantity - 1);
    }

    quantityElement.textContent = quantity;

    // Actualizar el subtotal
    const price = 3.5; // Precio estático
    const subtotalElement = icon.parentElement.nextElementSibling;
    const subtotal = (price * quantity).toFixed(2);
    subtotalElement.textContent = subtotal + '€';

    // Actualizar el total
    let total = 0;
    subtotalElements.forEach(element => {
      total += parseFloat(element.textContent);
    });
    totalElement.textContent = total.toFixed(2) + '€';
  });
});
