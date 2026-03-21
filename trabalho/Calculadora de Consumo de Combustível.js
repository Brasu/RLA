let nomeMotorista = prompt("Qual o nome do motorista?");
console.log("Tipos de combustível: \n1-Gasolina \n2-Etanol \n3-Diesel");
let tipoCombustivel = parseInt(prompt("Qual combustivel é utilizado?"));
let distanciaPercorrida = parseInt(prompt("Qual a distância percorrida?"));
let litrosAbastecidos = parseInt(prompt("Quantidade de litros abastecidos?"));
let consumoMedio,

let consumoReal = distanciaPercorrida / litrosAbastecidos;

  switch(tipoCombustivel){
  case 1:
    consumoMedio = 12;
    switch(true){
   case consumoReal >= (consumoMedio * 1.1);
        console.log("Excelente --- acima do esperado");
        break;
   case consumoReal >= (consumoMedio * 0.9);
        console.log("Regular --- dentro do esperado");
    break;
   case consumoReal >= (consumoMedio * 0.7);
        console.log("Ruim --- abaixo do esperado");
        break;
   case consumoReal < (consumoMedio * 0.7);
        console.log("Crítico --- veículo requer manuntenção");
    }
  case 2:
    consumoMedio = 8.5;
    switch(true){
   case consumoReal >= (consumoMedio * 1.1);
        console.log("Excelente --- acima do esperado");
        break;
   case consumoReal >= (consumoMedio * 0.9);
        console.log("Regular --- dentro do esperado");
    break;
   case consumoReal >= (consumoMedio * 0.7);
        console.log("Ruim --- abaixo do esperado");
        break;
   case consumoReal < (consumoMedio * 0.7);
        console.log("Crítico --- veículo requer manuntenção");
    }
    break;
  case 3:
    consumoMedio = 15;
switch(true){
   case consumoReal >= (consumoMedio * 1.1);
        console.log("Excelente --- acima do esperado");
        break;
   case consumoReal >= (consumoMedio * 0.9);
        console.log("Regular --- dentro do esperado");
    break;
   case consumoReal >= (consumoMedio * 0.7);
        console.log("Ruim --- abaixo do esperado");
        break;
   case consumoReal < (consumoMedio * 0.7);
        console.log("Crítico --- veículo requer manuntenção");
    }
    break;
  default:
    console.log("Combustível inválido.")
}

consumoReal >= (consumoMedio * 1.1) || consumoReal >= (consumoMedio * 0.9) ? console.log("Liberado para frota.") : console.log("Encaminhado para revisão.")


