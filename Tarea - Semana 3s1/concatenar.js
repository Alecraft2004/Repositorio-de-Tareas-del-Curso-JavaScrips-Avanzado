function capitalizarNombres(nombreCompleto) {

  // Dividir el nombre completo en partes
  let nombres = nombreCompleto.split(" ");
  // Recorrer cada nombre y procesar
  for (let i = 0; i < nombres.length; i++) {
    // Si el nombre está todo en mayúsculas, convertir a minúsculas
    if (nombres[i] === nombres[i].toUpperCase()) {
      nombres[i] = nombres[i].toLowerCase();
    }
    // Poner la primera letra en mayúscula y el resto en minúscula
    nombres[i] = nombres[i].substring(0,1).toUpperCase() + nombres[i].substring(1);
  }
  // Unir los nombres y devolver el resultado
  return nombres.join(" ");
}
// Ejemplo de uso
let nombre = "ALEJANDRO MARIO";
console.log(capitalizarNombres(nombre)); 