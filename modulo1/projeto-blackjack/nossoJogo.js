/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//    -------- CÓDIGO --------

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   const compraUsuario1 = comprarCarta()
   const compraUsuario2 = comprarCarta()
   let cartaUsuario1 = compraUsuario1.texto
   let cartaUsuario2 = compraUsuario2.texto
   let pontosUsuario = compraUsuario1.valor + compraUsuario2.valor


   const compraDealer1 = comprarCarta()
   const compraDealer2 = comprarCarta()
   let cartaDealer1 = compraDealer1.texto
   let cartaDealer2 = compraDealer2.texto
   let pontosDealer = compraDealer1.valor + compraDealer2.valor
  
   const resultado = () =>{
      if (pontosUsuario > pontosDealer) {
         console.log("O Usuário venceu!")
      }else if (pontosUsuario < pontosDealer) {
         console.log("O Computador venceu")
      }else {
         console.log("Empate")
      }
   }

   console.log(`USUÁRIO - Cartas: ${cartaUsuario1} e ${cartaUsuario2} - Pontuação: ${pontosUsuario}`)
   console.log(`COMPUTADOR - Cartas: ${cartaDealer1} e ${cartaDealer2} - Pontuação: ${pontosDealer}`)
   resultado()
  
}else {
   console.log("O jogo acabou.")
}