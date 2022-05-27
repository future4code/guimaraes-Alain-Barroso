type Amostra = {
    numeros: number[], 
    obterEstatisticas:(numeros: number[]) => {}
}

function obterEstatisticas(numeros:number[]):{}{
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
    let soma:number = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas:{maior:number, menor:number,media:number}  = {
        maior : numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([5]))