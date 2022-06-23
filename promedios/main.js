const lista1 = [
  100,
  200,
  500,
  400000000,
];

const lista2 = [
  100,
  200,
  300,
  500,
  400000000,
];

const lista3 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1
]

const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];

function calcularMediaAritmetica(lista) {
  if (lista.length > 0) {
    const totalValores = lista.reduce(function(valorAcumulado = 0, valorActual) {
      return valorAcumulado + valorActual;
    })
    return totalValores / lista.length;
  } else {
    return 'Este array se encuentra vacío';
  }
}

function calcularMedianaAritmetica(lista) {
  lista.sort((a, b) => a - b);
  if ((lista.length % 2) == 0) {
    const elemento1 = lista[(lista.length / 2) - 1];
    const elemento2 = lista[lista.length / 2];
    return calcularMediaAritmetica([elemento1, elemento2]);
  } else {
    return lista[parseInt(lista.length / 2)]
  }
}

function calcularModaAritmetica(lista) {
  let contador = {};
  lista.map(function(elemento) {
    if (contador[elemento]) {
      contador[elemento] += 1;
    } else {
      contador[elemento] = 1;
    }
  })
  let contadorArray = Object.entries(contador).sort(function(a, b) {
    return a[1] - b[1];
  })
  return `${contadorArray[contadorArray.length - 1][0]} que aparece en ${contadorArray[contadorArray.length - 1][1]} oportunidad/es.`;
}

function calcularPromedioPonderado(lista) {
  let notasPonderadas = lista.map(function(elemento) {
    return elemento.note * elemento.credit;
  }).reduce((acc, act) => acc + act);
  let totalPonderado = lista.map(function(elemento) {
    return elemento.credit;
  }).reduce((acc, act) => acc + act);
  return notasPonderadas / totalPonderado;
}

document.getElementById("array1").innerText = lista1;
document.getElementById("mediaAritmetica1").innerText = calcularMediaAritmetica(lista1);
document.getElementById("medianaAritmetica1").innerText = calcularMedianaAritmetica(lista1);
document.getElementById("modaAritmetica1").innerText = calcularModaAritmetica(lista1);
document.getElementById("array2").innerText = lista2;
document.getElementById("mediaAritmetica2").innerText = calcularMediaAritmetica(lista2);
document.getElementById("medianaAritmetica2").innerText = calcularMedianaAritmetica(lista2);
document.getElementById("modaAritmetica2").innerText = calcularModaAritmetica(lista2);
document.getElementById("array3").innerText = lista3;
document.getElementById("mediaAritmetica3").innerText = calcularMediaAritmetica(lista3);
document.getElementById("medianaAritmetica3").innerText = calcularMedianaAritmetica(lista3);
document.getElementById("modaAritmetica3").innerText = calcularModaAritmetica(lista3);
document.getElementById("array4").innerText = JSON.stringify(notes);
document.getElementById("promedioPonderado").innerText = calcularPromedioPonderado(notes);
