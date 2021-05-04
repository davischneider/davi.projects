var numeros = new Array();

numeros[0] = parseInt(prompt('Digite um valor (1/10)'));
numeros[1] = parseInt(prompt('Digite um valor (2/10)'));
numeros[2] = parseInt(prompt('Digite um valor (3/10)'));
numeros[3] = parseInt(prompt('Digite um valor (4/10)'));
numeros[4] = parseInt(prompt('Digite um valor (5/10)'));
numeros[5] = parseInt(prompt('Digite um valor (6/10)'));
numeros[6] = parseInt(prompt('Digite um valor (7/10)'));
numeros[7] = parseInt(prompt('Digite um valor (8/10)'));
numeros[8] = parseInt(prompt('Digite um valor (9/10)'));
numeros[9] = parseInt(prompt('Digite um valor (10/10)'));

Array.min = function (array){
    return Math.min.apply(Math,array);
}
Array.max = function (array){
    return Math.max.apply(Math, array);
}


alert(`O menor valor digitado foi ${Array.min(numeros)} e o maior ${Array.max(numeros)}`);