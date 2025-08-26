// Definición de variables
let num = 8; // 00001000 en binario

// Desplazamiento a la izquierda
let desplazamientoIzquierda = num << 2; // 32 (000100000)

console.log("Desplazamiento a la izquierda: " + desplazamientoIzquierda);

// Desplazamiento a la derecha
let desplazamientoDerecha = num >> 2; // 2 (00000010)

console.log("Desplazamiento a la derecha: " + desplazamientoDerecha);

// Desplazamiento a la derecha sin signo
let desplazamientoDerechaSinSigno = num >>> 2; // 2 (00000010)

console.log("Desplazamiento a la derecha sin signo: " + desplazamientoDerechaSinSigno);
