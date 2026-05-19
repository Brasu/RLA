let quantidadeFilmesAssistidos = parseInt(prompt("Quantos filmes você assistiu esse mês? "));
let tempoFilme;
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

}
console.log();
console.log("Tempo total assistido:", );
console.log("Filmes longos:", filmesLongos);
console.log("Duração média:", );
console.log("Maior duração:", maiorDuração);
