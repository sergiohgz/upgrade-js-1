'use strict';

function form1(x) {
    if (typeof x === 'function') {
        x();
        return;
    }
    console.log('x no es una función: ' + x);
}

function aux() {
    console.log('Hola desde aux');
}

form1(aux);

let x = 'Hola';
let y = "Mundo";
let z =              x + ' - ' + y;
let zInterpolacion = `${x} - ${y}`;

console.log(z === zInterpolacion);

let verdad = false;
if (verdad === true)

Math.pow(3,4) === 3 ** 4
