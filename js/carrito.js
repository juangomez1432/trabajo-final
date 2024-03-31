const carrito = [];
let total = 0;

function agregarAlCarrito(precio) {
  carrito.push(precio);
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoList = document.getElementById('carrito-list');
  carritoList.innerHTML = '';
  carrito.forEach((precio, index) => {
    const item = document.createElement('li');
    item.textContent = `Producto ${index + 1}: $${precio}`;
    carritoList.appendChild(item);
  });
  document.getElementById('total').textContent = total;
}
