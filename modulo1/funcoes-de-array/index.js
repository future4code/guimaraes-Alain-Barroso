// ----- RESOLUÇÃO DOS EXERCÍCIOS - Callback -----

//     ----- EXERCÍCIOS DE INTERPRETAÇÃO -----

/*
    ----- Exercício 01 -----

        a) O que vai ser impresso no console?
        RESPOSTA: Será impresso cada item do array, seguido do seu indice e o array a qual pertence.


    ----- Exercício 02 -----

        a) O que vai ser impresso no console?
        RESPOSTA: O programa irá imprimir um novo array, apenas contendo os nomes do array Usuarios.

    
    ----- Exercício 03 -----

        a) O que vai ser impresso no console?
        RESPOSTA: Será impresso um novo array com os objetos que não possuem o apelido "Chijo".
*/

//     ----- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----

//      ----- Exercício 01 -----

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]


// a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomeDoguinhos = pets.map((item) =>{
    return item.nome
})

console.log(nomeDoguinhos)


// b) Crie um novo array apenas com os [cachorros salsicha]
const onlySalsichas = pets.filter((item) =>{
    return item.raca.toLowerCase() === "salsicha"
})

console.log(onlySalsichas)


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que 
//    são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para 
//    tosar o/a `[NOME]`!"

const mensagemDesconto = pets.filter((item) =>{
    if (item.raca.toLowerCase() === "poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
    }
})



//      ----- Exercício 02 -----

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//  a) Crie um novo array que contenha apenas o nome de cada item
const nomesProdutos = produtos.map((item) =>{
    return item.nome
})

console.log(nomesProdutos)


//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
//  aplicando 5% de desconto em todos eles
const itensDesconto = produtos.map((item) =>{
    const product = item.nome
    const precoDesconto = item.preco * 0.95

    return {nome: product, novoPreco: precoDesconto.toFixed(2)}
})

console.log(itensDesconto)


//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const onlyBebidas = produtos.filter((item) =>{
    return item.categoria.toLowerCase() === "bebidas"

})

console.log(onlyBebidas)


//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const onlyYpe = produtos.filter((item) =>{
    return item.nome.includes("Ypê")

})

console.log(onlyYpe)


//  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
//  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const fraseCompra = produtos.filter((item) =>{
    if (item.nome.includes("Ypê")){
        console.log(`Compre ${item.nome} por ${item.preco}`)
    }

})

console.log(fraseCompra)



//     ----- DESAFIOS -----

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
const ordemAlfabetica = pokemons.map((item) =>{
    return item.nome

})

console.log(ordemAlfabetica.sort()) // Sem exito ao tentar utilizar função de comparação no .sort().


// b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
const tipoSemDuplicatas = pokemons.map((item) =>{
    return item.tipo
    
})

console.log([...new Set(tipoSemDuplicatas)])