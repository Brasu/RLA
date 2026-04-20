let idade = parseInt(prompt("Qual sua idade? "));
let tempoContribuicao = parseFloat(prompt("Qual seu tempo de contribuição? "));

if (idade >= 65 || tempoContribuicao >= 30 && idade >= 60) {
    console.log("Parabéns, você já pode se aposentar!");
} else {
    console.log("Você ainda não pode se aposentar.");
}
