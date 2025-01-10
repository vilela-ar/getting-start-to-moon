function saudacao () { 
    console.log('ola');
}
saudacao();
function sum(a,b) {
    return a + b;
}
let resultado = sum(50, 10); //adicionar
console.log (resultado); // 60

function decrease(a,b){
    return a - b;
}
let result = decrease(29, 10); // subtrair
console.log(result); //19

function nothing(a,b){
   //sem retorno
}
let res = nothing(); 
console.log(res);