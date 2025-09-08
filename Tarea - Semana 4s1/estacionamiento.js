// Cochera 2 filas x 3 columnas, " " = libre, "X" = ocupado
let cochera = [
  [" ", " ", " "],
  [" ", " ", " "]
];

console.log("Estado inicial de la cochera:");
console.log(cochera.map(fila => fila.join(" ")).join("\n") + "\n");

// Ocupar el primer espacio libre
function ocupar() {
  for (let i = 0; i < cochera.length; i++) {
    for (let j = 0; j < cochera[i].length; j++) {
      if (cochera[i][j] === " ") {
        cochera[i][j] = "X";
        console.log(`Se ocupó el espacio en fila ${i+1}, columna ${j+1}`);
        return;
      }
    }
  }
  console.log("No hay espacios libres.");
}

// Desocupar un espacio (fila y columna empiezan en 1)
function desocupar(fila, columna) {
  if (cochera[fila-1][columna-1] === "X") {
    cochera[fila-1][columna-1] = " ";
    console.log(`Se desocupó el espacio en fila ${fila}, columna ${columna}`);
  } else {
    console.log("Ese espacio ya está libre.");
  }
}

// Ejemplo de uso:
ocupar();
ocupar();
console.log("\nEstado de la cochera después de ocupar dos espacios:");
console.log(cochera.map(fila => fila.join(" ")).join("\n") + "\n");

desocupar(1, 1);
console.log("\nEstado de la cochera después de desocupar fila 1, columna 1:");
console.log(cochera.map(fila => fila.join(" ")).join("\n"));