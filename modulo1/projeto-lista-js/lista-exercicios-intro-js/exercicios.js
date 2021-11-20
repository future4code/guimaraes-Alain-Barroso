// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Digite a altura do objeto")
  let largura = prompt("Digite a largura do objeto")

  let retangulo = altura * largura

  console.log(retangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Digite o ano atual")
let anoNascimento = prompt("Digite o ano de seu nascimento")

let idade = anoAtual - anoNascimento

console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  imc = peso / (altura * altura)
return imc


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let email = prompt("Digite seu email")

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite sua cor favorita")
  let cor2 = prompt("Digite outra cor que você goste")
  let cor3 = prompt("Agora digite mais um cor que você goste")

 let coresFavoritas = [cor1, cor2, cor3]
 console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 string: "bAnAnA"

 return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 let qtdIngressos = custo / valorIngresso

return qtdIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array0 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = array0

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

 return (string1.toLowerCase()) === (string2.toLowerCase())

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

// let maiorIdade = prompt("Você tem mais de 18 anos?")
// let formacao = prompt("Você possui ensino médio completo?")
// let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")


}