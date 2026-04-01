let numero = parseInt(prompt("Digite um número: "));
let soma = 0
for(let i = 0; i < numero+1; i++){
    soma+=i;
    if(i == numero){
    console.log(soma)
    }
}
