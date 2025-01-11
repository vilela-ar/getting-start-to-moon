/*  
  Exercício 1: Criação e Acesso a Propriedades
  Crie um objeto chamado carro com as seguintes propriedades:

  marca (string)
  modelo (string)
  ano (número)
*/
const carro = {
  marca: 'porsche',
  modelo: '992.2',
  ano: 2025,
}
console.log(carro);
/* 
  Exercício 2: Adicionar e Remover Propriedades
  Dado o objeto abaixo:

  Adicione uma propriedade chamada profissao com o valor 'Engenheira'.
  Remova a propriedade idade.
  Exiba o objeto atualizado no console.
*/
const pessoa = {
  nome: 'Ana',
  profissao: 'engenheira',
};
console.log(pessoa);


/*
  Exercício 3: Métodos em Objetos
  Crie um objeto chamado calculadora com os seguintes métodos:

  somar(a, b) - retorna a soma de dois números.
  multiplicar(a, b) - retorna o produto de dois números.
  Teste os métodos chamando-os com diferentes valores e exibindo o resultado no console.
*/
const multiplicar = (a, b) => a * b;
console.log (multiplicar(3, 4));

/*
  Exercício 5: Desestruturação de Objetos
  Dado o objeto:

  Use desestruturação para extrair as propriedades nome e preco do objeto produto.
  Extraia também o nome do fabricante e o país de fabricação do objeto aninhado fabricante.
  Exiba os valores extraídos no console.
*/
const produto = {
  nome: 'Notebook',
  preco: 2500,
  fabricante: {
    nome: 'TechCorp',
    pais: 'Brasil'
  }
};
const {nome, preco, fabricante} = produto

console.log(nome)
console.log(preco)
console.log(fabricante)
/*
  Exercício 6: Função com Parâmetros Desestruturados
  Crie uma função chamada exibirUsuario que recebe um objeto com as seguintes propriedades:

  nome (string)
  idade (número)
  cidade (string)
  A função deve exibir no console a mensagem:
  "O usuário [nome] tem [idade] anos e mora em [cidade]."

  Teste a função com diferentes objetos.

  Ajuda:
  const name = 'Rodrigo'
  const age = 21

  console.log(`nome: ${name}, age: ${age}`) // rodrigo 21
*/
const exibirUsuario = ({nome,idade,cidade}) => {
    console.log(`O usuário ${nome} tem ${idade} anos e mora em ${cidade}.`);
}
const usuario = {
    nome: 'João',
    idade: 28,
    cidade: 'Rio de Janeiro'
  };
  exibirUsuario(usuario);

/*
  Exercício 7: Desestruturação com Rest (...ageStuff)
  Dado o objeto:

  Use desestruturação para extrair titulo e autor.
  Use o operador rest para agrupar as propriedades restantes em um novo objeto chamado detalhes.
  Exiba os valores no console.
*/
const livro = {
  titulo: 'JavaScript para Iniciantes',
  autor: 'João Silva',
  ano: 2023,
  preco: 45.0
};
const {titulo, autor, ...detalhes} = livro

console.log(`Título: ${titulo}`);
console.log(`Autor: ${autor}`);
console.log('Detalhes:', detalhes);
