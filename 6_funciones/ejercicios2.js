// Funciones con parámetros

// 1. Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo

function evaluarNumero(numero) {
    if(numero > 0) {
        return numero + ' es positivo';
    } else if(numero < 0) {
        return numero + ' es negativo';
    } else {
        return numero + ' no es ni positivo ni negativo';
    }
}

let res1 = evaluarNumero(1)
// console.log(res1);
// evaluarNumero(100);
// evaluarNumero(-50);
// evaluarNumero(-30.5);
// evaluarNumero(0);
// evaluarNumero('hola');


// 2. Crear una función que reciba el nombre de un cliente y un numero que hace referencia a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado

function registrarCliente(nombreCliente, ahorroInicial) {
    console.log(`Se registró a ${nombreCliente} con un ahorro de $${ahorroInicial}`);
}

// registrarCliente('Diana Torres', 500);
// registrarCliente('Jorge López', 10);

let nombre1 = 'Liliana Muñiz';
let num1 = 900;

// registrarCliente(nombre1, num1);

let nombre2 = 'Julia Ramos';
let num2 = 3;

// registrarCliente(nombre2, num1);

let nombreCliente = 'Oscar Pérez';
let ahorroInicial = 10000;

// registrarCliente(nombreCliente, ahorroInicial);

// let nombreIngresado = prompt('Ingresa el nombre del cliente');
// let montoParaAhorrar = prompt('Ingresar el monto inicial');

// registrarCliente(nombreIngresado, montoParaAhorrar);

// let nombreIngresado2 = prompt('Ingresa el nombre del cliente');
// let montoParaAhorrar2 = prompt('Ingresar el monto inicial');

// registrarCliente(nombreIngresado2, montoParaAhorrar2);

// registrarCliente(prompt('Ingresa el nombre del cliente*'), prompt('Ingresar el monto inicial*'))

// NOTA ejemplos concatencación
// let nombrePrueba = 'Hiromi'
// console.log('Hola, soy ');
// console.log("Hola, soy ");
// console.log('Hola, soy ' + nombrePrueba);
// console.log('Hola, soy ' + nombrePrueba + ' y vivo en GDL');

// console.log(`Hola, soy`)
// console.log(`Hola, soy ${nombrePrueba}`);
// console.log(`Hola, soy ${nombrePrueba} y vivo en GDL`);


// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio

function calcularPromedio(arregloCalificaciones) {
    let sumatoria = 0;
    
    for(let i = 0; i < arregloCalificaciones.length; i++) {
        sumatoria = sumatoria + arregloCalificaciones[i];
    } 

    let promedio = sumatoria/arregloCalificaciones.length;
    console.log('el promedio es ' + promedio);
}

calcularPromedio([90, 89, 79]);
calcularPromedio([100, 100, 90]);
calcularPromedio([10, 10, 10, 90, 70, 50, 30, 40, 70]);

let array1 = [100, 90, 80, 80, 70, 50];
calcularPromedio(array1);

// 4. Crear una función que reciba un número y nos diga si es par o impar

// 5. Crear una función que reciba un código (elige tres códigos diferentes) y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)

// 6. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su perímetro

// 7. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área

// 8. Crear una función que reciba 2 números y me entregue el número más alto

// 9. Crear una función que reciba 2 números y me entregue el número más pequeño

// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres

// 11. Crear una función que reciba 1 número y me lo muestre al cubo

// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene

// 13. Crear una función que reciba una palabra y la transforme a minúsculas

// 14. Crear una función que reciba una palabra y la transforme a mayúsculas

// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']