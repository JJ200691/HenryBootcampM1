// var arreglo = [1, 2, 3, 4, 4, 5, 5, 1, 2];
// var set = new Set(arreglo);
// console.log(arreglo); // [ 1, 2, 3, 4, 4, 5, 5, 1, 2 ]
// console.log(set);

function Stack() {
  this.stack = [];
}

Stack.prototype.add = function (value) {
  this.stack.push(value);
  return this.stack;
};

Stack.prototype.remove = function () {
  return this.stack.pop();
};

Stack.prototype.values = function () {
  return this.stack;
};

var pila = new Stack();

console.log(pila.add(1));
console.log(pila.add(2));
console.log(pila.add(3));
console.log(pila.add(4));
console.log(pila.add(3));

console.log(pila.remove());
console.log(pila.remove());
console.log(pila.values());
