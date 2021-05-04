var A = prompt("Digite um número:");
var B = prompt("Digite outro número:");
var C = prompt("Digite outro número:");

var soma = Number(A) + Number(B) + Number(C);
var resultado = soma/3;

if(resultado >= 7){
    alert(`Aluno aprovado com média ${resultado}!`)
} else if (resultado < 7) {
    alert(`Aluno reprovado com média ${resultado}!`)
}