/* ----- RESOLUÇÃO DOS EXERCÍCIOS - Lacos -----

     ----- EXERCÍCIOS DE INTERPRETAÇÃO -----

1. O que o código abaixo está fazendo? Qual o resultado impresso no console? */
    
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    
    /* RESPOSTA: O código está executando uma sequência de loop, e o valor impresso será 10


     ----- // -----

2. Leia o código abaixo: */
    
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }

    
/*    a) O que vai ser impresso no console?
      RESPOSTA: O console irá imprimir os todos os elementos maiores que o número 18;
                Sendo: 19; 21; 23; 25; 27; 30;
    
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
    Se sim, o que poderia ser usado para fazer isso?
    RESPOSTA: Sim, poderia ser utilizado uma condição contínua e o incremento `indice++` e, dentro do escopo, utilizar
              o comando `console.log("Indice:" +indice)


     ----- // -----

3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? */
    

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

/*    RESPOSTA: O console irá imprimir 4 linhas com o a quantidade de asteriscos representando o número da linha;
                Sendo: Linha 1, um asterisco ... Linha 4, quatro asteriscos.

                


     ----- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----


     ----- Exercício 01 ----- */

const bichinhosEstimacao = Number(prompt("Quantos bichinhos de estimacao você possui?"))
const arrayBichinhos = []


if (bichinhosEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet!")

}

else if (bichinhosEstimacao > 0) {
    for (let i = 0; i < bichinhosEstimacao; i++){
        arrayBichinhos.push(prompt(console.log("Digite o nome dos seu pet")))

    }
    console.log(arrayBichinhos)
}


/*  ----- Exercício 02 ----- */

const arrayOriginal = [7, 14, 21, 28, 35, 42,]

// RESPOSTA a)
for(let i = 0; i < arrayOriginal.length; i++){
  console.log(+arrayOriginal[i])

}

// RESPOSTA b)
for(let i = 0; i < arrayOriginal.length; i++){
  console.log(arrayOriginal[i] / 10)

}

// RESPOSTA c)
let arrayPares = []

const imprimePares = arrayOriginal => {
  
  for (let i in arrayOriginal){
    if(arrayOriginal[i] % 2 === 0){
      let par = arrayOriginal[i]
      arrayPares.push(par)
    }

  }

}
imprimePares(arrayOriginal)
console.log(arrayPares)



// RESPOSTA d)
for(let i = 0; i < arrayOriginal.length; i++){
  console.log('O elemento do índex', [i].toString(), 'é: ' +arrayOriginal[i])

}

// RESPOSTA e)
const maiorMenor = (array) => {
    let numeroMenor = Infinity
    let numeroMaior = 0

    for (let i=0; i< array.length; i++)
        if (array[i] < numeroMenor){
          numeroMenor = array[i]
        }
        else if (array[i] > numeroMaior){
          numeroMaior = array[i]
        }

  console.log("O maior número é:", numeroMaior.toString(), "e o menor número é:", numeroMenor.toString())

}

maiorMenor(arrayOriginal)