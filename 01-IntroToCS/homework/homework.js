'use strict'

function BinarioADecimal(num) {

  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma += num[i] * 2 ** (num.length - 1 - i);
  }
  return suma;
}

function DecimalABinario(num) {

  let aux = [];
  while (num !== 0) {
    let entero = Math.floor(num / 2);
    let resto = parseInt(num % 2);
    num = entero;
    aux.push(resto);
  }
  return aux.reverse().join("");

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}