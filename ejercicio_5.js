/*
    Crea una función que reciba una cadena como parámetro y retorne el valor del string invertido. 
    Solo se permite utilizar estructuras de control.
    Escribe el resultado en la consola.
*/

const string = "hola mundo";

const reverso = (texto) => {
  if (typeof texto != "string") {
    return "Introducir un string";
  }

  let texto_reverso = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    texto_reverso += texto[i];
  }

  return texto_reverso;
};

console.log(reverso(string));
