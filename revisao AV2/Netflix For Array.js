let quantidadeFilmesAssistidos = parseInt(prompt("Quantos filmes você assistiu esse mês? "));
let tempoFilme,mediaFilmes;
let tempoFilmes = [];
let filmesLongos = 0;
let maiorDuraçao = 0;

for(let contador = 0; contador < quantidadeFilmesAssistidos; contador++){
    tempoFilme = parseInt(prompt("Duração do filme "+(contador+1)+": "));
    tempoFilmes.push(tempoFilme);

    if(tempoFilme > 120){

    filmesLongos++
 }

    if(tempoFilme > maiorDuraçao){

    maiorDuraçao = tempoFilme
 }

 let totalDuraçaoFilmes = 0;
 for(let indiceAtual = 0; indiceAtual < tempoFilmes.length; indiceAtual++){
   totalDuraçaoFilmes += temposFilmes[indiceAtual];
 }

}

mediaFilmes = totalDuraçaoFilmes / quantidadeFilmesAssistidos;

console.log();
console.log("Tempo total assistido:", totalDuraçaoFilmes);
console.log("Filmes longos:", filmesLongos);
console.log("Duração média:", mediaFilmes.toFixed(2),"minutos");
console.log("Maior duração:", maiorDuração, "minutos");
