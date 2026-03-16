let tipoDoUsuario = prompt("Qual seu tipo de usuário? ").toLowerCase();  
let email , senha  
switch(tipoDoUsuario){
  case "admin":
      console.log("-----PAINEL ADMIN-----")
    email = prompt("Email: ");
    senha = prompt("Senha: ");
    switch(email){
      case "admin@email":
        switch(senha){
          case "admin":
            console.log("Login com sucesso!");
            break;
          default:
            console.log("Senha inválida.");
        }
      break;
      default:
        console.log("Email inválido.")
    }
    break;
  case "usuario":
    console.log("-----PAINEL USUÁRIO-----");
    email = prompt("Email: ");
    senha = prompt("Senha: ");
    switch(email){
      case "usuario@email":
        switch(senha){
          case "senha123":
            console.log("Login com sucesso!");
            break;
          default:
            console.log("Senha inválida.");
        }
        break;
      default:
        console.log("Email inválido.");
    }
    break;
  case "convidado":
    console.log("-----PAINEL CONVIDADO-----");
    console.log("Login com sucesso!");
    break;
  default:
    console.log("Tipo de usuário inválido.");
}
            
   


