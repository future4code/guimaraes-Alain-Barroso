/* ----- RESOLUÇÃO DOS EXERCÍCIOS - Objetos -----

//     ----- EXERCÍCIOS DE INTERPRETAÇÃO -----

1.  Leia o código abaixo */
    
    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }
    
    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length - 1])
    // console.log(filme.transmissoesHoje[2])
    

/* a) O que vai ser impresso no console?
   RESPOSTA: Será impresso os seguintes valores no console
             Matheus Nachtergaele
             Virginia Cavendish
             canal: "Globo", horario: "14h */


/*  ----- // -----

2. Leia o código abaixo */
    

    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }
    
    // const gato = {...cachorro, nome: "Juba"}
    
    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    // console.log(cachorro)
    // console.log(gato)
    // console.log(tartaruga)
    
/*  a) O que vai ser impresso no console?
    RESPOSTA: Será impresso os seguintes valores no console, respectivamente
                {nome: "Juca", idade: 3, raca: "SRD"}
                {nome: "juba", idade: 3, raca: "SRD"}
                {nome: "Juco", idade: 3, raca: "SRD"}

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto? 
    RESPOSTA: A sintaxe espelha o objeto. Assim como ele é, sem alterações.    */


/*  ----- // -----

3. Leia o código abaixo     */
    
    // function minhaFuncao(objeto, propriedade) {
    // 	return objeto[propriedade]
    // }
    
    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }
    
    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))

    /*a) O que vai ser impresso no console?
        REPOSTA: Será impresso os seguintes valores, respectivamente
                false
                undefined (pois não foi atribuido uma propriedade)

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
        RESPOSTA: Após atribuir a função e objeto, o console invocou o resultado False (boolean) quando perguntado se  a pessoa era Backender
        e Undefined (indefinido) quando perguntado a Altra, cuja chave e não havia sido atribuída ao objeto "pessoa".
    */


//     ----- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----

/*

1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).
    Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** */

//     let pessoa = {
//         nome: "Alain Christian", 
//         apelidos: ["Aladdin", "Chris", "Ace"]
// }

//     function funcaoTexto () {
//         let imprimeFrase = console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

//         return imprimeFrase
//    }



// console.log(funcaoTexto())


/*    b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
        Depois, chame a função feita no item anterior passando como argumento o novo objeto */

    // let apelidosDiferentes = {
    // ...pessoa.apelidos,
    //     apelidos: ["Gênio", "ACB", "Jogador"] // não substituiu
    // }

    // funcaoTexto(apelidosDiferentes)


/*  ----- // -----

2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */
    
    // let objeto1 = {
    //     nome: "Alain", 
    //     idade: 22,
    //     profissao: "Fotografo"
    // }
    
    // let objeto2 = {
    //     nome: "Cristina", 
    //     idade: 39,
    //     profissao: "Costureira"
    // }
    
    /* b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão` */

//     function imprimeInformacoes () {
//         const arrayInformacoes = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]
//         return arrayInformacoes

//     }
//  console.log(imprimeInformacoes())

/*  ----- // -----

3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho` */

    const carrinho = []
    
//  b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    const fruta1 = {
        nome: "banana",
        disponibilidade: true

    }
//  c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa funções criados. 
    
//  d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
    