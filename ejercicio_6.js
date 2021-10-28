/*
    Implementa un método de ordenamiento para el siguiente arreglo:
    [13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10].
    Imprime en la consola el resultado de la función.
    Utiliza solamente estructuras de control.
*/

const array = [13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
function ordenarArray(numeros) {

  if (!numeros) return []
  if (numeros.length <= 1) return numeros;

  const pivote = Math.round(numeros.length / 2);
  let menores = [];
  let numeroBase = [];
  let mayores = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == numeros[pivote]) numeroBase.push(numeros[i])
    else (numeros[i] < numeros[pivote]) ? menores.push(numeros[i]) : mayores.push(numeros[i])
  }

  return [...ordenarArray(menores), ...numeroBase, ...ordenarArray(mayores)];
}
console.table(ordenarArray(array));



