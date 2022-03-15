// Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
// * Nota: sólo con for, no se vale usar funciones que ya existan

// Creamos un arreglo con calificaciones ordenadas aleatoriamente
var calificaciones = [90, 8, 10, 100, 90, 85, 100, 100, 70];
// console.log(calificaciones);

// Ordenamos de menor a mayor los valores del array
var calificacionesOrdenadas = calificaciones.sort(function(a, b){return a-b});

// Tomamos el último elemento del array ordenado, tomando en cuenta que será el mayor
var numMayor = calificacionesOrdenadas[calificacionesOrdenadas.length -1];
console.log('numMayor', numMayor);

// Tomamor el primer elemento del array ordenado, tomando en cuenta que será el menor
var numMenor = calificacionesOrdenadas[0];
console.log('numMenor', numMenor);

// Para obtener el promedio necesitamos una variable que nos ayude a almacenar la suma de los números
var sumatoria = 0;

for (var i = 0; i < calificaciones.length; i++) {
    sumatoria = sumatoria + calificaciones[i];
}

var promedio = sumatoria/calificaciones.length;
console.log('promedio', promedio);



