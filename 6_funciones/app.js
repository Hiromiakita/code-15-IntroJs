// FUNCIONES
// nombreFuncion();

{
    // SCOPE
    // las variables locales que crearé aquí, sólo existirán en este espacio
}

// código en el archivo principal
// console.log('mensaje fuera de una función');
// console.log('mensaje fuera de una función');
// console.log('mensaje fuera de una función');
// console.log('mensaje fuera de una función');
// console.log('mensaje fuera de una función');

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
// nombreFuncion();
// nombreFuncion();
// nombreFuncion();
// nombreFuncion();
// nombreFuncion();
// Una función se puede mandar llamar todas las veces que yo quiera

// Creación de otra función
function saludar() {
    // Instrucciones
    let nombre = 'Hiromi';
    console.log(`Hola ${nombre}`);

}

// Ejecución de la función 5 veces
// saludar();
// saludar();
// saludar();
// saludar();

// Revisar archivo ejercicios1.js

// Uso de parámetros en funciones
// Los parámetros nos sirven para que las funciones sean dinámicas

// Ejemplo sin parámetros

function sumarDosNumeros () {
    let n1 = 1;
    let n2 = 50;
    console.log(n1 +n2);
}

// sumarDosNumeros();
// sumarDosNumeros();
// sumarDosNumeros();
// sumarDosNumeros();

// Ejemplo con parámetros
// Dentro de los paréntesis definimos la cantidad de parámetros que la función necesita y los nombramos con un nombre de referencia
function sumarDosNumerosConParametros (numeroA, numeroB) {
    let suma = numeroA + numeroB;
    console.log(suma);
}

// Mandar llamar la función y enviar valores como parámetros
// sumarDosNumerosConParametros(1, 10);
// sumarDosNumerosConParametros(20, 300);
// sumarDosNumerosConParametros(2, 5000000);
// sumarDosNumerosConParametros(10, 100);


function registrarUsuario (nombreUsuario) {
    console.log('Bienvenidx, ' + nombreUsuario);
}

// registrarUsuario('Ana');
// registrarUsuario('Julio');
// registrarUsuario(10);
let nombre1 = 'carlos';
// registrarUsuario(nombre1);

function mostrarNumeros(limite) {
    for(let i = 1; i <= limite; i++) {
        console.log(i);
    }
}

mostrarNumeros(20);
mostrarNumeros(2);
mostrarNumeros(30);

// Revisar archivo ejercicios2.js

// LEER

// Funciones con return

