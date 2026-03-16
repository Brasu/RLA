let idade = parseInt(prompt("Qual sua idade?"));
let tempoContribuicao = parseFloat(prompt("Qual seu tempo de contribuição?"));
idade >= 65 ? tempoContribuicao >= 30 ? console.log("Você pode se aposentar.") : console.log("Você não pode se aposentar.") : console.log("Você não pode se aposentar.");
