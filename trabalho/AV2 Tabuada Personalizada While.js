let número = parseInt(prompt("Digite um número: "));
let tabuada = 0;
let multiplicador = 0

while(tabuada < número * 10){
    multiplicador++;
    tabuada = número * multiplicador;
    console.log(número, " x ", multiplicador, " = ", tabuada);
}
