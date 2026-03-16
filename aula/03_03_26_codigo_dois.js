let tipoDoUsuario = prompt("Qual seu tipo de usuário? ").toLowerCase();  
let email , senha  
  
if(tipoDoUsuario == "admin") {  
    console.log("-----PAINEL ADMIN-----");  
    email = prompt("Email: ");  
    senha = prompt("Senha: ");  
    if(email == "admin@email" && senha == "admin"){  
        console.log("Login com sucesso!");  
    }  
    else{  
        console.log("Credenciais inválidas.")  
    }  
}  
else if(tipoDoUsuario == "usuario") {  
    console.log("-----PAINEL USUÁRIO-----");  
    email = prompt("Email: ");  
    senha = prompt("Senha: ");  
    if(email == "usuario@email" && senha == "senha123") {  
        console.log("Login com sucesso!");  
    }  
    else{  
        console.log("Credenciais inválidas.")  
    }  
}  
else if(tipoDoUsuario == "convidado") {  
    console.log("-----PAINEL CONVIDADO-----");  
    console.log("Login com sucesso!");  
}  
else {  
    console.log("Tipo de usuário inválido!");  
}
