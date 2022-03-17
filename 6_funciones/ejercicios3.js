// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero"] y nos regrese un arreglo con sólo los elementos tipo number

function filtrarArreglo(arreglo) {
    let nuevoArreglo = [];
    for(let i = 0; i < arreglo.length; i++) {
        if(typeof arreglo[i] === 'number') {
            nuevoArreglo.push(arreglo[i])
        }
    }

    return nuevoArreglo;
}

// console.log(filtrarArreglo([4, "dos", 8, "tres", 5, 9, 1, "cero", true, false, 1, 'hola', 1, 20, 20]))

let arr = [1, 2, 't', 20, true, '2', 22];
// console.log(filtrarArreglo(arr));



// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro

function crearNumeroPares(limite) {
    let pares = [];
    for(let i = 0; i <= limite; i++) {
        if(i%2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}

// console.log(crearNumeroPares(9));
// console.log(crearNumeroPares(30));


function crearNumeroPares2(limite) {
    let pares = [];
    for(let i = 0; i <= limite; i+=2) {
        pares.push(i);
    }
    return pares;
}

// console.log(crearNumeroPares2(9))
// console.log(crearNumeroPares2(30))

// 3. Crear una función que me entregue un número entero random entre 1 y 100

function crearNumRandom(limInferior, limSuperior) {
    let numRandom = Math.floor(Math.random() * (limSuperior - limInferior)) + limInferior;

    return numRandom;
}

console.log(crearNumRandom(1, 11));


// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4, las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2
let palabra = 'hola';

function codificarMensaje(palabra) {

    let palabraArray = palabra.split('');
    for(let i = 0; i < palabraArray.length; i++) {
        if(palabraArray[i] === 'a') {
            palabraArray[i] = 4;
        } else if(palabraArray[i] === 'e') {
            palabraArray[i] = 3
        } else if(palabraArray[i] === 'i') {
            palabraArray[i] = 7
        } else if(palabraArray[i] === 'o') {
            palabraArray[i] = 6
        } else if(palabraArray[i] === 'u') {
            palabraArray[i] = 2
        }
    }
    return palabraArray.join('');
}

console.log(codificarMensaje('hola'))
console.log(codificarMensaje('Murcielago'))
