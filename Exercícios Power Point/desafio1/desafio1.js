var A = prompt("Digite o valor de A:");
var B = prompt("Digite o valor de B:");
var C = prompt("Digite o valor de C:");

var delta = Math.sqrt((B*B)-(4*A*C));
var x1 = ((-B)+(delta))/(2*A);
var x2 = ((-B)-(delta))/(2*A);

if(B >= 0 && C >= 0){
    alert(`O resultado da equação ${A}x² + ${B}x + ${C} segundo a fórmula de Bhaskara é S = {${x1}, ${x2}}`);
}
else if(B <= 0 && C >= 0){
    alert(`O resultado da equação ${A}x² ${B}x + ${C} segundo a fórmula de Bhaskara é S = {${x1}, ${x2}}`);
}
else if(B >= 0 && C <= 0){
    alert(`O resultado da equação ${A}x² + ${B}x ${C} segundo a fórmula de Bhaskara é S = {${x1}, ${x2}}`);
}
else {
    alert(`O resultado da equação ${A}x² ${B}x ${C} segundo a fórmula de Bhaskara é S = {${x1}, ${x2}}`);
}