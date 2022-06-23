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

//////////////////////////////////////////////////////

const cupones = [
  {
    "code": "PLATZI10",
    "percentage": 10
  },
  {
    "code": "PLATZI20",
    "percentage": 20
  },
  {
    "code": "PLATZI30",
    "percentage": 30
  },
  {
    "code": "PLATZI40",
    "percentage": 40
  },
  {
    "code": "PLATZI50",
    "percentage": 50
  },
]

function calcularDescuentoConCupon(precio, cupon) {
  let existingCoupon = cupones.find(existingCoupon => existingCoupon.code === cupon)
  if (existingCoupon) {
    const porcentajePrecioConDescuento = 100 - existingCoupon.percentage;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return `El monto a pagar es de $${precioConDescuento}`;
  } else {
    return "Este cupón no es valido";
  }
}

function onClickButtonPriceDiscountCoupon() {
  let precio = document.getElementById("precioCupon").value;
  let cupon = document.getElementById("descuentoCupon").value;
  let precioConDescuento = calcularDescuentoConCupon(precio, cupon);
  document.getElementById('resultadoCupon').innerText = precioConDescuento;
}