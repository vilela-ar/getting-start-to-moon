/*  
  Exercício 1: Criação e Acesso a Propriedades
  Crie um objeto chamado carro com as seguintes propriedades:

  marca (string)
  modelo (string)
  ano (número)
*/


/* 
  Exercício 2: Adicionar e Remover Propriedades
  Dado o objeto abaixo:

  Adicione uma propriedade chamada profissao com o valor 'Engenheira'.
  Remova a propriedade idade.
  Exiba o objeto atualizado no console.
*/
const pessoa = {
  nome: 'Ana',
  idade: 30
};


/*
  Exercício 3: Métodos em Objetos
  Crie um objeto chamado calculadora com os seguintes métodos:

  somar(a, b) - retorna a soma de dois números.
  multiplicar(a, b) - retorna o produto de dois números.
  Teste os métodos chamando-os com diferentes valores e exibindo o resultado no console.
*/


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