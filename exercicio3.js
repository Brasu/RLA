let name = prompt("Qual seu nome? ");
let limiteVelocidade = parseFloat(prompt("Qual a velocidade máxima permitida na via? "));
let velocidadeVeiculo = parseFloat(prompt("Qual a velocidade registrada do seu veículo? "));
let excessoVelocidade =  velocidadeVeiculo - limiteVelocidade;
let nomeFormatado = name[0].toUpperCase()+name.substring(1).toLowerCase();

if (velocidadeVeiculo <= limiteVelocidade) {
    console.log("Motorista dentro do limite de velocidade.");
} else if (excessoVelocidade <= 10 || excessoVelocidade < 11) {
    console.log("=====Multa=====");
    console.log(nomeFormatado+",", "você ultrapassou o limite da via de", limiteVelocidade+"km/h.", "Seu veículo está registrado como estando a", velocidadeVeiculo+"km/h, estando", excessoVelocidade+"km/h acima do limite de velocidade permitido. Devido a isso você está recebendo uma MULTA LEVE de 50 reais.");
} else if (excessoVelocidade >= 11 && excessoVelocidade <= 20) {
    console.log("=====Multa=====");
    console.log(nomeFormatado+",", "você ultrapassou o limite da via de", limiteVelocidade+"km/h.", "Seu veículo está registrado como estando a", velocidadeVeiculo+"km/h, estando", excessoVelocidade+"km/h acima do limite de velocidade permitido. Devido a isso você está recebendo uma MULTA MÉDIA de 100 reais.");
} else {
    console.log("=====Multa=====");
    console.log(nomeFormatado+",", "você ultrapassou o limite da via de", limiteVelocidade+"km/h.", "Seu veículo está registrado como estando a", velocidadeVeiculo+"km/h, estando", excessoVelocidade+"km/h acima do limite de velocidade permitido. Devido a isso você está recebendo uma MULTA GRAVE de 200 reais.");
}
