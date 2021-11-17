/* ----- RESOLUÇÃO DOS EXERCÍCIOS - Operadores e Lógica de Programação -----

    ----- EXERCÍCIOS DE INTERPRETAÇÃO -----

1. As mensagens impressas serão:
    a. false
    b. false
    c. true
    d. boolean


2. O código não executou a soma, devido os valores
   digitados pelo usuário, no prompt, serem imprimidos no console
   como Strings. O correto, seria redigir o código tranformando a 
   as Strings utilizando o comando Number()


3. Sugestão de correção para o código:

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma)




//  ----- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----



1.  a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

*/

let idadeUsuario = prompt("Qual sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

Number(idadeUsuario, idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeMelhorAmigo)
console.log("A diferença de idade entre vocês é de: ", idadeUsuario - idadeMelhorAmigo, "anos")

/* -------------------


2. Faça um programa que
    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

let numeroPar = prompt("Insira um número **par**")
Number(numeroPar)
console.log(numeroPar % 2) // Todos os resultados imprimem 0, pois números pares não possuem resto em divisão;
                           // Caso o usuário insira um número impar, o resultado irá ser 1.

/* -------------------


3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas */

let ageUsuario = prompt("Qual a sua idade?")
Number(ageUsuario)

console.log("Sua idade em meses é: ", ageUsuario * 12)
console.log("Sua idade em dias é: ", ageUsuario * 365)
console.log("Sua idade em horas é: ", ageUsuario * 8760)

/* -------------------



4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as
   seguintes mensagens seguidas pelo true ou false:

    a. O primeiro numero é maior que segundo? true
    b. O primeiro numero é igual ao segundo? false
    c. O primeiro numero é divisível pelo segundo? true
    d. O segundo numero é divisível pelo primeiro? true

    obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

let primeiroNum = prompt("Digite um número qualquer")
let segundoNum = prompt("Agora, digite outro número qualquer")

Number(primeiroNum)
Number(segundoNum)

resultado = (primeiroNum > segundoNum)
resultadoB = (primeiroNum % segundoNum)
resultadoC = (segundoNum % primeiroNum)

console.log("O primeiro numero é maior que segundo?", resultado)
console.log("O primeiro numero é igual ao segundo?", primeiroNum === segundoNum)
console.log("O primeiro numero é divisível pelo segundo?", resultadoB === 0)
console.log("O segundo numero é divisível pelo primeiro?", resultadoC === 0)

// :)