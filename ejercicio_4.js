/*
    Crea una función que calcule la cantidad de veces que se 
    repite una palabra que recibe como parámetro. 
    Escribe el resultado en la consola.
*/

const Cadena = "hola  mundo, hola hola hola, como estamos hol";
const Palabra = "hola";

const BuscarPalabra = (PalabraBuscada, texto) => {
  const ArregloTexto = texto.split(" ");
  let CantidadPalabras = 0;

  ArregloTexto.forEach((Palabra) => {
    if (Palabra.includes(PalabraBuscada))
      CantidadPalabras = CantidadPalabras + 1;
  });

  return ` La palabra "${PalabraBuscada}" Se repite : ${CantidadPalabras}`;
};

console.log(BuscarPalabra(Palabra, Cadena));
