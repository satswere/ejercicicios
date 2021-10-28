/*
    Escribe un algoritmo que te permita multiplicar
    dos números sin utilizar el signo de multiplicar.
    Pon el resultado en la consola.

    console.time('loop');
    entre estos 2 haces la prueba de rendimiento
    console.timeEnd('loop');

*/
const multiplicacion = (x, y) => {
  let resultado = 0;

  if (x > y) {
    contador = Math.abs(y);
    numero = x;
  } else {
    contador = Math.abs(x);
    numero = y;
  }

  const ResultadoPosito = x >= 0 === y >= 0;

  for (let i = 1; i <= contador; i++) {
    ResultadoPosito ? (resultado += numero) : (resultado += -numero);
  }

  return resultado;
};

console.log(multiplicacion(10, -100));
