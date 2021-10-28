/*
    1. Calcular el día de la semana recibiendo como input una fecha en formato 	dd/mm/yyyy,
     puede ser en el lenguaje que sea sin utilizar librerías externas.
        Ejemplo:
        Input: 20/08/2021
        Output: viernes
*/
 
const dia = 20
const mes = 08
const año = 2021

const calcular_dia = (dia,mes,año) => {
    const meses_diferencia = [0, 3, 2, 5, 0, 3, 4, 1, 4, 6, 2, 4];
    const dias_convertidos = ['sabado','domingo','lunes','martes','miercoles','jueves','viernes'];


    if (mes <= 2) año = año - 1;
    const bisiesto = determinar_bisiestos(año);
    const veamos = (bisiesto + año + meses_diferencia[mes - 1] + dia) % 7;
    return dias_convertidos[veamos] ;
}

const determinar_bisiestos = (año) => {
    let total_años = 0;
    for (let index = 0; index <= año; index++) {
        const años_bisiestos = (index % 4) === 0 //si, se puede dividir
        const no_son_años_bisiestos = (index % 100) === 0 ? false : true // no es si se puede dividir
        const si_es_bisiestos = index % 400 == 0 // si, se puede dividir       
        if (años_bisiestos && (no_son_años_bisiestos || si_es_bisiestos)) {
            total_años = total_años + 1
        }
    }
    return total_años;
}
console.log(calcular_dia(dia,mes,año));

