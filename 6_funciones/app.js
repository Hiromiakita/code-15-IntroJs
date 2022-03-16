// FUNCIONES
nombreFuncion();

{
    // SCOPE
    // las variables locales que crearé aquí, sólo existirán en este espacio
}

// código en el archivo principal
console.log('mensaje fuera de una función');
console.log('mensaje fuera de una función');
console.log('mensaje fuera de una función');
console.log('mensaje fuera de una función');
console.log('mensaje fuera de una función');

// Estructura y creación de una función
function nombreFuncion () {
    // Instrucciones
    // Las instrucciones declaradas dentro del cuerpo de una fucnió
    // sólo se ejecutarán cuando yo invoque a la función
    console.log('FUNCIÓN');
    console.log('sigo siendo la función');
}

// Mandar llamar-Ejecutar-Invocar-Correr una función
// Con su nombre y paréntesis
nombreFuncion();
nombreFuncion();
nombreFuncion();
nombreFuncion();
nombreFuncion();
// Una función se puede mandar llamar todas las veces que yo quiera

// Creación de otra función
function saludar() {
    // Instrucciones
    let nombre = 'Hiromi';
    console.log(`Hola ${nombre}`);

}

// Ejecución de la función 5 veces
saludar();
saludar();
saludar();
saludar();