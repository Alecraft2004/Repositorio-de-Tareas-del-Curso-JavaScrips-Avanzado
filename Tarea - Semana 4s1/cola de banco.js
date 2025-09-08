// Cola con 1 fila y 5 posiciones, " " = vacío, "C" = cliente
let cola = [[" ", " ", " ", " ", " "]];

console.log("Estado inicial de la cola:");
console.log(cola[0].join(" ") + "\n");

// Agregar cliente al primer espacio vacío
function agregarCliente() {
  for (let i = 0; i < cola[0].length; i++) {
    if (cola[0][i] === " ") {
      cola[0][i] = "C";
      console.log(`Cliente agregado en posición ${i+1}`);
      return;
    }
  }
  console.log("La cola está llena.");
}

// Atender cliente (sacar el primero y mover los demás)
function atenderCliente() {
  if (cola[0][0] === " ") {
    console.log("No hay clientes en la cola.");
    return;
  }
  console.log("Cliente atendido en posición 1");
  for (let i = 0; i < cola[0].length - 1; i++) {
    cola[0][i] = cola[0][i+1];
  }
  cola[0][cola[0].length - 1] = " ";
}

// Ejemplo de uso:
agregarCliente();
agregarCliente();
console.log("\nEstado de la cola después de agregar 2 clientes:");
console.log(cola[0].join(" ") + "\n");

atenderCliente();
console.log("\nEstado de la cola después de atender 1 cliente:");
console.log(cola[0].join(" ") + "\n");

agregarCliente();
console.log("\nEstado de la cola después de agregar otro cliente:");
console.log(cola[0].join(" "));