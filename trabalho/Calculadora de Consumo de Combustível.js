let nomeMotorista = prompt("Qual o nome do motorista? ");
console.log("Tipos de combustível: \n1-Gasolina \n2-Etanol \n3-Diesel");
let tipoCombustivel = parseInt(prompt("Qual combustivel é utilizado? "));
let distanciaPercorrida = parseInt(prompt("Qual a distância percorrida? "));
let litrosAbastecidos = parseInt(prompt("Quantidade de litros abastecidos? "));
let consumoReal = distanciaPercorrida / litrosAbastecidos;

let consumoMedio, mensagem, status;

  switch(tipoCombustivel){
  case 1:
    consumoMedio = 12;
    break;
  case 2:
    consumoMedio = 8.5;
    break;
  case 3:
    consumoMedio = 15;
    break;
  default:
    console.log("Combustível inválido.")
}
switch(true){
   case consumoReal >= (consumoMedio * 1.1):
        mensagem = "Excelente --- acima do esperado";
        break;
   case consumoReal >= (consumoMedio * 0.9):
        mensagem = "Regular --- dentro do esperado";
    break;
   case consumoReal >= (consumoMedio * 0.7):
        mensagem = "Ruim --- abaixo do esperado");
        break;
   case consumoReal < (consumoMedio * 0.7):
        mensagem = "Crítico --- veículo requer manuntenção";
    }

status = consumoReal >= (consumoMedio * 1.1) || consumoReal >= (consumoMedio * 0.9) ? "Liberado para frota." : "Encaminhado para revisão.";
console.log("Motorista:", nomeMotorista, "\nConsumo do combustível:", consumoReal, "\nStatus do veículo:", status);
