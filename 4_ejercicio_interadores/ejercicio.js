// // Ejericio 1
// // Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
// // * Nota: sólo con for, no se vale usar funciones que ya existan

// // Creamos un arreglo con calificaciones ordenadas aleatoriamente
// var calificaciones = [90, 8, 10, 40, 100];
// // var calificacionesOrdenadasMenorAMayor = [8, 10, 40, 90, 100]
// // calificaciones.length = 5 elementos
// // primer elemento -> calificaciones[0]
// // último elemento -> calificaciones[4]
// // último elemento -> calificaciones[longitudDelArreglo - 1]
// // console.log(calificaciones);

// // Ordenamos de menor a mayor los valores del array
// var calificacionesOrdenadas = calificaciones.sort(function(a, b){return a-b});
// // var calificacionesOrdenadasMenorAMayor = [8, 10, 40, 90, 100]

// // Tomamos el último elemento del array ordenado, tomando en cuenta que será el mayor
// var numMayor = calificacionesOrdenadas[calificacionesOrdenadas.length -1];
// console.log('numMayor', numMayor);

// // Tomamor el primer elemento del array ordenado, tomando en cuenta que será el menor
// var numMenor = calificacionesOrdenadas[0];
// console.log('numMenor', numMenor);

// // Para obtener el promedio necesitamos una variable que nos ayude a almacenar la suma de los números
// var sumatoria = 0;

// for (var i = 0; i < calificaciones.length; i++) {
//     sumatoria = sumatoria + calificaciones[i];
// }

// var promedio = sumatoria/calificaciones.length;
// console.log('promedio', promedio);

// Ejercicio 2
// Crear un arreglo con los números de la serie fibonacci
// OPCIÓN 1, teniendo un array precreado con [0, 1]
var limite = 10;
var serie = [0, 1];
// 0, 1
for(var i = 2; i < limite; i++){
    serie[2] + serie[1]
    serie.push(serie[i-1] + serie[i-2]);
}

console.log(serie);

// OPCIÓN 2, teniendo un array vacío
// 

// Ejercicio 3
// Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos como la siguiente:

//     *
//    ***
//   *****
//  *******
// *********

// Ejercicio 4
// Mostrar en la consola la table de un número (del 1 al 10)
// Tabla del 2
// 1 x 2 = 2
// 2 x 2 = 4
// 3 x 2 = 6 
// .
// .
// 10 x 2 = 20

// Ejercicio 5
// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene
// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a
// hacer un algoritmo que haga esto por el?

// Ejercio 6
// Escribir todos los números que terminan en 0 y estén entre 2 y 121
