// Seleccionar el botón y el contenedor de salida
const printButton = document.getElementById("printButton");
const output = document.getElementById("output");

// Función para imprimir los 20 primeros números
function printNumbers() {
    let numbers = "";
    for (let i = 1; i <= 20; i++) {
        numbers += `<span style= "margin-right:8px;">${i}</span>`;
    }
    output.innerHTML = numbers;
}

// Agregar evento al botón
printButton.addEventListener("click", printNumbers);
