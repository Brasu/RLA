let nome = prompt("Qual seu nome? ");
let notaAv1 = parseFloat(prompt("Digite sua nota da AV1: "));
let notaAv2 = parseFloat(prompt("Digite sua nota da AV2: "));

let notaParcial = (notaAv1 + notaAv2)/2;

if (notaParcial >= 4){
    let notaAv3 = parseFloat(prompt("Digite sua nota da AV3: "));
    let percentualFrequencia = parseFloat(prompt("Qual seu percentual de frequência? "));
    let notaFinal = (notaParcial + notaAv3)/2;
    if (notaFinal >= 5 && percentualFrequencia >= 75) {
        console.log("Parabéns pela aprovação,", nome+"! Sua nota final foi",notaFinal.toFixed(2)+"!");
    } else {
        console.log("Reprovado na Nota Final.");
    }
} else {
    console.log("Reprovado na Nota Parcial.");
}
