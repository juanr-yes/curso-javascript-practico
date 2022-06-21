function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  let precio = document.getElementById("precio").value;
  let descuento = document.getElementById("descuento").value;
  let precioConDescuento = calcularPrecioConDescuento(precio, descuento);
  document.getElementById('resultado').innerText = `El monto a pagar es de $${precioConDescuento}`;
}