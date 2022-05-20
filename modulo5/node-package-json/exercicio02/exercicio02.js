/*

  Crie uma aplicação Node que recebe uma string representando uma operação matemática e 
  dois valores numéricos. O retorno deverá ser o resultado da operação selecionada 
  utilizando os 2 valores fornecidos.
  
*/

const opMat = process.argv[2]
const firstNumber = Number(process.argv[3])
const secNumber = Number(process.argv[4])

if(opMat === 'somar'){
    console.log(`Res: ${secNumber + firstNumber}`)
}

if(opMat === 'subtrair'){
    console.log(`Res: ${secNumber - firstNumber}`)
}

if(opMat === 'multiplicar'){
    console.log(`Res: ${secNumber * firstNumber}`)
}