// SCOPE -> ESPACIO -> ALCANCE -> CONTEXTO -> MEMORIA

// SCOPE puede estar definido por llaves {}

// variables globales -> Se pueden utilizar en el contexto general del programa
var nombre = 'Hiromi';
console.log(nombre);
{
    console.log(nombre);
    var nombre2 = 'Serch';
    console.log(nombre2);
}
console.log(nombre2);
nombre = 'H';
console.log(nombre)


// variables locales -> Se utilizan sólo en el contexto que fueron creadas
let nombre3 = 'Diana';
console.log(nombre3);
{
    console.log(nombre3);
    let nombre4 = 'Arturo';
    console.log(nombre4);
}
// NO sabrá a qué variable hacemos referencia
// console.log(nombre4);
nombre3 = 'Julio';
console.log(nombre3);

// variables que son constantes -> Se utilizan sólo en el contexto que fueron creadas y no pueden cambiar su valor

const nombre5 = 'Lupita';
console.log(nombre5);
// nombre5 = 'Roberto';

{
    console.log(nombre5)
    const nombre6 = 'Carlos';
}
// NO sabrá a qué variable hacemos referencia
// console.log(nombre6);