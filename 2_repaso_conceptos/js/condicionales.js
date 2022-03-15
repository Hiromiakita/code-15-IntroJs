// IF
// Vamos a tener una condición para poder realizar una acción

if (10 < 5) {
    console.log('sí se cumple la condición')
}

if ('hola' === 'hola') {
    console.log('sí se cumple la segunda condición')
}

if (10 === 10) {
    console.log('sí se cumple la tercera condición')
}

if(10%2 === 0) {
    console.log('sí se cumple la cuarta condición')
}

var edad = 30;

if(edad >= 18) {
    console.log('sí puedes pasar');
}


// IF ELSE tengo una condición para realizar una acción y además tengo una acción en caso de que la condición no se cumpla

var edadAlumna = 10;

if(edadAlumna > 12) {
    console.log('eres adolescente');
} else {
    console.log('eres una niña');
}


// var nombre = 'Luis';

// if(nombre === 'Luis') {
//     console.log('Hola, Luis');
// } else {
//     console.log('Hola, extraño');
// }

// IF ELSE IF -> Para tener más de una condición

var nombreAlumno = 'Diana';

if(nombreAlumno === 'Jorge') {
    console.log('Eres el ganador');
} else if (nombreAlumno === 'Luis') {
    console.log('Ganaste el segundo lugar');
} else if (nombreAlumno === 'Rogelio') {
    console.log('Eres el tercer lugar');
} else {
    console.log('No has ganado un lugar');
}

// TERNARIO


