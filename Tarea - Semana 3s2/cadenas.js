
const texto = `“Conste por el presente documento el CONTRATO DE CRÉDITO que celebran de una parte, el BANCO INTERAMERICANO DE FINANZAS (BANBIF), identificado con RUC No. 20101036813, con domicilio para efectos del presente contrato enAv. Ricardo Rivera Navarrete No 600, distrito de San Isidro, provincia y departamento de Lima, que actúa debidamente representado por los funcionarios autorizados que suscriben el presente documento según poder inscrito en la Partida N°11026203 del Registro de Personas Jurídicas de Lima, a quien en adelante se denominará EL BANCO; y de la otra parte, EL CLIENTE, cuyos datos y demás información constan en el Anexo 1 del presente documento; en las condiciones y términos siguientes: “`;
// 1. Expresión regular para el RUC
const regexRUC = /RUC No\. (\d{11})/;
const matchRUC = texto.match(regexRUC);
let ruc = "No encontrado";
if (matchRUC && matchRUC[1]) {
    ruc = matchRUC[1]; // El grupo de captura 1 contiene el número de RUC
}
// 2. Expresión regular para el Número de Partida
const regexPartida = /Partida N°(\d+)/;
const matchPartida = texto.match(regexPartida);
let numeroPartida = "No encontrado";
if (matchPartida && matchPartida[1]) {
    numeroPartida = matchPartida[1]; // El grupo de captura 1 contiene el número de partida
}
// Mostrar los resultados
console.log("--- Extracción de Datos ---");
console.log(`Texto original: \n${texto}\n`);
console.log(`RUC encontrado: ${ruc}`);
console.log(`Número de Partida encontrado: ${numeroPartida}`);