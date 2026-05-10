const notaAV1 = parseFloat(prompt("Insira aqui a nota da AV1: "));
const notaAV2 = parseFloat(prompt("Insira aqui a nota da AV2: "));
const notaAV3 = parseFloat(prompt("Insira aqui a nota da AV3: "));

let notaPonderada = (notaAV1 + notaAV2) / 2;
let notaFinal;

function NotaFinal(notaAV1, notaAV2, notaAV3){

switch(true){
  case notaPonderada >= 4:
    notaFinal = (notaPonderada + notaAV3) / 2;
  case notaFinal >= 5:
    console.log("Você foi aprovade com nota final de", notaFinal+"!");
    break;
  default:
    console.log("Reprovado na Nota Final.");
}
 }

NotaFinal(notaAV1, notaAV2, notaAV3);
