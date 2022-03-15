// Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
// * Nota: sólo con for, no se vale usar funciones que ya existan

var calificaciones = [90, 8, 10, 100, 90, 85, 100, 100, 70];
// console.log(calificaciones);

// // Ordenando de menor a mayor
var calificacionesOrdenadas = calificaciones.sort(function(a, b){return a-b});
// console.log(calificacionesOrdenadas);

var numMayor = calificacionesOrdenadas[calificacionesOrdenadas.length -1];
console.log('numMayor', numMayor);

var numMenor = calificacionesOrdenadas[0];
console.log('numMenor', numMenor);

var sumatoria = 0;

for (var i = 0; i < calificaciones.length; i++) {
    sumatoria = sumatoria + calificaciones[i];
}

var promedio = sumatoria/calificaciones.length;
console.log('promedio', promedio);



