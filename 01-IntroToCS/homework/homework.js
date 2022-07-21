'use strict'

function BinarioADecimal(num) {

  let dec = 0;
  let pos = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    dec += num[i] * 2 ** pos;
    pos++;
  }
  return dec;
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