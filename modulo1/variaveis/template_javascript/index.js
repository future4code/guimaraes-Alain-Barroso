/*
-----------------------------------------------------------

****** Resolução dos Exercícios de INTERPRETAÇÃO de código:


1. Será impressa duas linhas.
 A primeira referente ao console.log(b), onde será impresso o valor 10;
 A segunda referente ao console.log(a,b), onde será impresso o valor 10 e 5, tal devido a alteração do valor de b.

2. Será impresso três valores: 10, 10 e 10, sendo estes o resultado da alteração dos valores das variáveis.


3. Sugestão de melhores nomes:
let horasDia = prompt("Quantas horas você trabalha por dia?")
let remuneracaoDia = prompt("Quanto você recebe por dia?") 

----------------------------------------------------------- */


// ***** Resolução dos Exercícios de ESCRITA de código:

// Exercício 1:

const nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

// console.log(typeof nome, typeof idade)

console.log("Olá,", nome, "! Você tem", idade, "anos.")

// PRIMEIRA IMPRESSÃO - SEM declaração: Resultou em um erro de sintaxe devido a falta de declaração da variável const;
// SEGUNDA IMPRESSÃO - COM declaração: Programa resultou em uma impressão no console, indicando que ambas as variáveis são Strings.



// Exercício 2:

let perguntaComputador = prompt("Você possui um computador?")
let perguntaJogos = prompt("Este computador é utilizado para jogar online?")
let perguntaTrabalho = prompt("No seu trabalho, você utiliza o computador pessoal?")

console.log("Você possui um computador? -", perguntaComputador)
console.log("Este computador é utilizado para jogar online? -", perguntaJogos)
console.log("No seu trabalho, você utiliza o computador pessoal? -", perguntaTrabalho)

// IMPRESSÃO CONSOLE:
// Você possui um computador? - Sim
// Este computador é utilizado para jogar online? - Sim
// No seu trabalho, você utiliza o computador pessoal? - Não


// Exercício 3:

let a = 10
let b = 25
c=a
a=b
b=c

console.log(a,b)

/* --------------------------------------------------------

***** DESAFIO                                                   */

let alturaUsuario = prompt("Qual a sua altura? (EM CM)")
let pesoUsuario = prompt("Qual o seu peso?")

console.log("O resultado da SOMA dos valores é:", Number(alturaUsuario) + Number(pesoUsuario))
console.log("O resultado da MULTIPLICAÇÃO dos valores é:", Number(alturaUsuario) * Number(pesoUsuario))











// :)