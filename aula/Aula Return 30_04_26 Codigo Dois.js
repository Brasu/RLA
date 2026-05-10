var AV1 = Number(prompt("Digite Av1: "));
var AV2 = Number(prompt("Digite Av2: "));
var AV3 = Number(prompt("Digite Av3: "));
var frequencia = Number (parseInt(prompt("Digite a frequencia: ")))

function CalcularMediaParcial(AV1, AV2){
        return (AV1 + AV2) / 2
    }
    function CalcularMediaFinal(MP, AV3){
    return (MP + AV3) / 2
    }
    function ValidarAprovacao(frequencia){
        return frequencia >= 75;
    }
let MP = CalcularMediaParcial(AV1, AV2);
let MF = CalcularMediaFinal(MP, AV3);

console.log(MP);
console.log(MF);
console.log(ValidarAprovacao(frequencia));
