let número = parseInt(prompt("Digite um número: "));
let tabuada = 0;
let i = 1

while(tabuada < número * 10){
    
    tabuada = número * (i++)
    console.log(tabuada)
}
