//Uma variável é um espaço na memória do computador onde você pode armazenar dados temporários que podem ser alterados durante a execução do programa.
//As variáveis têm um nome e um tipo de dado associado, e o valor armazenado nelas pode ser modificado conforme o programa avança.
let idade = 25;
let nome = "Carlos";
let Genêro = "Homem";
let Vivo = true;
//Uma constante é semelhante a uma variável, mas com uma diferença importante: uma vez que seu valor é definido, ele não pode ser alterado durante a execução do programa.
//Ou seja, as constantes são usadas para armazenar valores que não irão mudar.
const ficha = {
  idade: 50,
  name: "jose",
  genero: "masculino",
  Vivo: true
}

// Tipos primitivos
// Inteiros: Armazenam números inteiros (sem casas decimais). (int)
// Ponto flutuante (ou reais): Armazenam números com casas decimais. (float)
// Caracteres: Armazenam caracteres individuais (char)
// Booleanos: Armazenam valores de verdadeiro ou falso (bobolean)
// Strings: Armazenam uma sequência de caracteres (palavras, frases, etc. (string)

//Tipos compostos
// Arrays (ou vetores): São coleções de valores do mesmo tipo (array)
// Objetos (ou structs): Estruturas que podem armazenar dados de diferentes tipos. (class/struct)

//exemplo int
idade = 10;
nome = "roberto";

console.log(idade); //10
console.log(ficha.name); //jose

//exemplo float
let preco = 9.99;
let altura = 1.80;

console.log(preco); //9.99
console.log(altura); //1.80

//exemplo char
let letra = "A";  // String com um único caractere
let simbolo = "!"; // Outro exemplo de string com um caractere

console.log(letra);   //A
console.log(simbolo); //!

//exemplo bobolean
let vivo = true; 
let ativo = false;

console.log(Vivo); //true
console.log(ativo); //false

//exemplo string
nome = "joao";
let cachorro = "pipoca"

console.log(nome); //joao
console.log(cachorro); //pipoca
