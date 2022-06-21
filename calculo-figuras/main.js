// Codigo del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function calcularPerimetroCuadrado() {
  let lado = document.getElementById("ladoCuadrado").value;
  alert(perimetroCuadrado(lado))
}

function areaCuadrado(lado) {
  return lado * lado;
}

function calcularAreaCuadrado() {
  let lado = document.getElementById("ladoCuadrado").value;
  alert(areaCuadrado(lado))
}

// Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function calcularPerimetroTriangulo() {
  let lado1 = parseInt(document.getElementById("ladoTriangulo1").value);
  let lado2 = parseInt(document.getElementById("ladoTriangulo2").value);
  let base = parseInt(document.getElementById("baseTriangulo").value);
  alert(perimetroTriangulo(lado1, lado2, base));
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaTriangulo() {
  let base = document.getElementById("baseTriangulo").value;
  let altura = document.getElementById("alturaTriangulo").value;
  alert(areaTriangulo(base, altura))
}

// Codigo del circulo
const pi = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function calcularDiametroCirculo() {
  let radio = document.getElementById("radioCirculo").value;
  alert(diametroCirculo(radio));
}

function perimetroCirculo(radio) {
  return diametroCirculo(radio) * pi;
}

function calcularPerimetroCirculo() {
  let radio = document.getElementById("radioCirculo").value;
  alert(perimetroCirculo(radio));
}

function areaCirculo(radio) {
  return (radio * radio) * pi;
}

function calcularAreaCirculo() {
  let radio = document.getElementById("radioCirculo").value;
  alert(areaCirculo(radio));
}

// Codigo del triangulo isosceles
function alturaTrianguloIsosceles(lado1, lado2, base) {
  if (lado1 === lado2) {
    return Math.sqrt((lado1*lado2) - ((base * base) / 4))
  } else {
    return 'Este no es un triangulo isosceles.'
  }
}

function calcularAlturaTrianguloIsosceles() {
  let lado1 = parseInt(document.getElementById("ladoTrianguloIsosceles1").value);
  let lado2 = parseInt(document.getElementById("ladoTrianguloIsosceles2").value);
  let base = document.getElementById("baseTriangulo").value;
  alert(alturaTrianguloIsosceles(lado1, lado2, base));
}