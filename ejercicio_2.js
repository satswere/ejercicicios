/*
    2. Operaciones con matrices: Escribe un algoritmo que permita resolver las 
    siguientes expresiones con matrices, escribir el resultado en la consola:
        •  (A*B) + C
        • (C / 2) * B - A
        • (A + B) - C
*/
const arrayA = [
    [1, 3, 4],
    [5, 6, 7],
    [8, 5, 10,]
]

const arrayB = [
    [1, 2, 1],
    [0, 1, 0],
    [2, 3, 4]
]

const arrayC = [
    [2, 5, 1],
    [6, 7, 2],
    [1, 8, 4]
]

const sumas = (a, b) => {
    var resultado = new Array(a.length).fill(0).map(row => new Array(b[0].length).fill(0));
    resultado.map((row, index) => {
        row.map((val, index2) => {
            resultado[index][index2] = a[index][index2] + b[index][index2]
        })
    })
    return resultado;
}

const resta = (a, b) => {
    var resultado = new Array(a.length).fill(0).map(row => new Array(b[0].length).fill(0));
    resultado.map((row, index) => {
        row.map((val, index2) => {
            resultado[index][index2] = a[index][index2] - b[index][index2]
        })
    })
    return resultado;

}

const multiplicacion = (a, b) => {
    var result = new Array(a.length).fill(0).map(row => new Array(b[0].length).fill(0));

    return result.map((row, index) => {
        return row.map((val, index2) => {
            return a[index].reduce((sum, elemento, indice) => sum + (elemento * b[indice][index2]), 0)
        })
    })
}

const division = (a, b) => {
    var resultado = new Array(a.length).fill(0).map(row => new Array(a[0].length).fill(0));

    resultado.map((row, index) => {
        row.map((val, index2) => {
            resultado[index][index2] = a[index][index2] / 2
        })
    })
    return resultado;
}

const operaciones = (A, B, C) => {
    // (A*B) + C
    let PrimeraExpresionOperacion1 = multiplicacion(A, B)
    let resultadoPrimeraExpresion = sumas(PrimeraExpresionOperacion1, C)

    //   • (C / 2) * B - A 
    let SegundaExpresionOperacion1 = division(C, 2)
    let SegundaExpresionOperacion2 = multiplicacion(SegundaExpresionOperacion1, B)
    let ResultadoSegundaExpresion = resta(SegundaExpresionOperacion2, A)


    // • (A + B) - C
    let TerceraExpresionOperacion1 = sumas(A, B)
    let ResultadoTerceraExpresion = resta(TerceraExpresionOperacion1, C)

    console.table(resultadoPrimeraExpresion);
    console.table(ResultadoSegundaExpresion);
    console.table(ResultadoTerceraExpresion);

}
operaciones(arrayA, arrayB, arrayC);