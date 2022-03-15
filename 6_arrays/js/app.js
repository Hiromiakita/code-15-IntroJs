// Todos los elementos que no sean primitivos vienen de Object
// Un array es un Object

// Array es una lista de elementos del mismo tipo o de distintos tipos que podemos manipular (añadir, quitar, ordenar...)
// var alumnos = ['Ana', 'Jorge', 'Diego'];
var alumnos = ['Ana', 'Jorge', 'Diego'];
console.log(alumnos);

var edades = [1, 200, 300, 0];
console.log(edades);

var info = ['hola', 1, true, 200, 'jeje'];
console.log(info);

// Acceder a un elemento de la lista
// Para acceder a un elemento, necesito conocer su posición
// Las posiciones inician en 0
var precios = [100, 188, 288, 20, 33];
console.log(precios);
// 100 ubicado en posición 0
// 188 ubicado en posición 1
console.log(precios[3]);
console.log(alumnos[2]);

// Métodos de los arreglos (todo lo que puede ser aplicado a un arreglo)