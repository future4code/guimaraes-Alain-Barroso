/* ----- RESOLUÇÃO DOS EXERCÍCIOS - Strings e Arrays -----

    ----- EXERCÍCIOS DE INTERPRETAÇÃO -----

1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**. */
    
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. Alteração na posição 2, número 4 passa a ser 19

const valor = array[i+6]
console.log('f. ', valor) // f. 9

/*
2. Leia o código abaixo com atenção                                                                   */
    
const frase = prompt("Digite uma frase")
    
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    
// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// O valor impresso será: "SUBI NUM ÔNIBUS EM MIRROCOS, 27"



/* ----- EXERCÍCIOS DE ESCRITA DE CÓDIGO ----- 



1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */


let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Agora digite seu e-mail")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario, "!")


/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

let array = ["pizza", "uramaki", "chocolate", "frutas", "lasanha"]

console.log(array) // a)
console.log("Essas são as minhas comidas preferidas: ", array) // b)

let comidaUsuario = prompt("Qual a sua comida preferida?")
array[1] = comidaUsuario
console.log(array) // c)


/* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console. */
    
let listaDeTarefas
let tarefa1 = prompt("Qual a sua tarefa mais importante do dia?")
let tarefa2 = prompt("E qual a sua tarefa mais fácil do dia?")
let tarefa3 = prompt("Digite uma terceira tarefa")

listaDeTarefas = [tarefa1, tarefa2, tarefa3]
console.log(listaDeTarefas)

let tarefaConcluida = prompt("Qual destas tarefas você já concluiu? (0, 1 ou 2)")
listaDeTarefas.splice(tarefaConcluida,1)
console.log(listaDeTarefas)