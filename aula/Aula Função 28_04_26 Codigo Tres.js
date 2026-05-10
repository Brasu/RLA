const idade = parseInt(prompt("Qual sua idade? "));

function faixaEtaria(idade){
  
  switch(true){
    case idade <= 10:
     console.log("Você é uma criança!");
     break;
    case idade >= 11 && idade <= 18:
      console.log("Você é um adolescente!");
      break;
    case idade >= 19 && idade <= 59:
      console.log("Você é um adulto!");
      break;
    default:
      console.log("Você é um idoso!");
  }
}

faixaEtaria(idade);        
