```

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numero = arrayDeNumeros.filter ((valor) => (valor === numeroEscolhido)).length
  
  if (numero > 0){
    return `O número ${numeroEscolhido} aparece ${numero}x`
  } else {
    return `Número não encontrado`
  }
  
}


```