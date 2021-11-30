/* ----- RESOLUÇÃO DOS EXERCÍCIOS - Condicionais -----

//     ----- EXERCÍCIOS DE INTERPRETAÇÃO -----

/* 1. Leia o código abaixo:
    
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 
    RESPOSTA: O código gerou um prompt para o usuário inserir um número que, após a divisão, o resto será comparado se é ou não igual a zero, retornando as resultados.

    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    RESPOSTA: Número pares, que possuem ZERO como resultado do RESTO após a divisão.

    c) Para que tipos de números a mensagem é "Não passou no teste"?
    RESPOSTA: Número impares, que possuem UM como resultado do RESTO após a divisão.

// ---------------------

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
     a) Para que serve o código acima?
    RESPOSTA: O código serve para o usuário inserir uma fruta e receber o resultado com seu respectivo valor.
    
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    RESPOSTA: "O preço da fruta Maça é R$ 2.25"

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    RESPOSTA: O código irá continuar depurando a condicional, retornando o valor R$5 para a fruta.


// ---------------------

3. Leia o código abaixo:
    
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)


    a) O que a primeira linha está fazendo?
    RESPOSTA: Está armazenando em uma variável a entrada que o usuário irá colocar no prompt.

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    RESPOSTA: Será retornada a frase "Esse número passou no teste". No segundo caso, retornará um erro.

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    RESPOSTA: Sim, devido o console estar tentando puxar uma variável que está dentro do escopo da condicional. O erro poderia ser evitado se a variável estivesse fora desse escopo, todavia no escopo global.



//     ----- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----

/*

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/

    const idadeUsuriario = Number(prompt("Digite sua idade"))

    if(idadeUsuriario >= 18){
        console.log("Você pode dirigir")
    }
    else {
        console.log("Você não pode dirigir")

    }



/* ---------------------


2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else` */

let turnoDeEstudo = prompt("Digite o turno que você estuda(M, V ou N)").toLocaleLowerCase()

 function imprimirSaudacao (){
             if (turnoDeEstudo === "m"){
                console.log("Bom dia!")

             }
             else if (turnoDeEstudo === "v"){
                console.log("Boa tarde!")

             }
            else 
            { console.log ("Boa noite!" )}
        }

imprimirSaudacao // imprimindo diferente****

/* ---------------------


3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora. */

let turnoUsurario = prompt("Digite o turno que você estuda (M, V ou N)").toLowerCase()

switch (turnoUsurario) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno inválido.")


}

/* ---------------------

4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais.
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("` */

let generoFilme = prompt("Qual o gênero do filme que gostaria de assistir?").toLowerCase()
let valorIngresso = prompt("Qual o valor do ingresso?").toLowerCase()

    if(generoFilme === "fantasia" && valorIngresso <= 15){
        console.log("Bom filme!")
    }
    else {
        console.log("Escolha outro filme :(")

    }