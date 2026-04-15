const email = "nicolindo@auauau.com"
const senha = "272017"

let emailSolicitado, senhaSolicitada;

while(email != emailSolicitado || senha != senhaSolicitada){
   
   emailSolicitado = prompt("Qual seu email? ");
   senhaSolicitada = prompt("Qual sua senha? ");
   if (email == emailSolicitado || senha == senhaSolicitada){
    console.log("Login feito com sucesso!")
   } else {
    console.log("Login inválido! Email ou senha errados!");
   }
    
}
