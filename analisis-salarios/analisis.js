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

const salariosCol = colombia.map((person) => person.salary).sort((a, b) => a - b);
const salariosColSorted = salariosCol.sort((a, b) => a - b);
const spliceStart = (salariosCol.length * 90) / 100;
const salariosColTop10 = salariosCol.slice().splice(spliceStart, salariosCol.length - spliceStart);

document.getElementById("salariosCol").innerText = JSON.stringify(colombia);
document.getElementById("mediaSalarios").innerText = calcularMediaAritmetica(salariosCol);
document.getElementById("medianaSalarios").innerText = calcularMedianaAritmetica(salariosCol);
document.getElementById("top10Salarios").innerText = salariosColTop10;
document.getElementById("medianaTop10").innerText = calcularMedianaAritmetica(salariosColTop10);
