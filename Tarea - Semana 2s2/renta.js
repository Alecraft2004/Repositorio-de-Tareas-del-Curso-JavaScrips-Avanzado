
// Función para calcular impuesto a la renta de cuarta categoría
function calcularImpuestoRentaCuartaCategoria(ingresoAnual) {
    let impuesto = 0;
    if (ingresoAnual <= 7000) {
        impuesto = 0;
    } else if (ingresoAnual <= 20000) {
        impuesto = (ingresoAnual - 7000) * 0.08;
    } else if (ingresoAnual <= 35000) {
        impuesto = (20000 - 7000) * 0.08 + (ingresoAnual - 20000) * 0.14;
    } else {
        impuesto = (20000 - 7000) * 0.08 + (35000 - 20000) * 0.14 + (ingresoAnual - 35000) * 0.17;
    }
    // Redondear el impuesto a dos decimales
    impuesto = Math.round(impuesto * 100) / 100;
    return impuesto;
}
// Ejemplo de uso
let ingresos = 40000; // ingreso anual en soles
let impuestoCalculado = calcularImpuestoRentaCuartaCategoria(ingresos);
console.log(`Ingreso anual: S/ ${ingresos}`);
console.log(`Impuesto a pagar: S/ ${impuestoCalculado}`);