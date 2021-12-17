// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   while (array[i] < array.length){
       i++
   }

   return i
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b){
        return a-b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []

    for(let i of array) {
        if(i % 2 === 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayNova = []

    for(let num of array) {
        if(num % 2 === 0) {
            arrayNova.push(Math.pow(num ,2))
        }
    }
    return arrayNova
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return array.reduce(function(a,b) {
        return Math.max(a,b)
    })
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = undefined;
    let menorNumero = undefined;
    let maiorDivisivelPorMenor = undefined;
    let diferenca = undefined;
 
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2
    } else {
        maiorNumero = num2;
        menorNumero = num1
    } if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true;
    } else {
        maiorDivisivelPorMenor = false;
    }   
    
    diferenca = maiorNumero-menorNumero

    return {
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca,
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numPares = []

    for(let i = 0; numPares.length < n; i++){
        if (i % 2 === 0 ){
            numPares.push(i)
        }
    } return numPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a,b)=> a-b)
    return array = [array[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const chamadaFilme = { 
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
        }

        return `Venha assistir ao filme ${chamadaFilme.nome}, de ${chamadaFilme.ano}, dirigido por ${chamadaFilme.diretor} e estrelado por ${chamadaFilme.atores[0]}, ${chamadaFilme.atores[1]}, ${chamadaFilme.atores[2]}, ${chamadaFilme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimo = {
        ...pessoa, nome: "ANÔNIMO"
   }
   return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let withPermission = pessoas.filter((pessoa) => {
        return (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
    }) 

    return withPermission
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let withoutPermission = pessoas.filter((pessoa) => {
        return !(pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
    })

    return withoutPermission
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    var consultasEmOrdem = []

    for (var i = 0; i < consultas.length; i++) {
        consultasEmOrdem.push(consultas[i].nome)
    }
    consultasEmOrdem.sort()

    var consultacomp = []
    for (var i = 0; i < consultasEmOrdem.length; i++) {
        for (var j = 0; j < consultas.length; j++) {
            if (consultasEmOrdem[i] === consultas[j].nome) {
                consultacomp.push(consultas[j]);
            }
        }
    }
    return consultacomp;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
        return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
    })
    for (let indice of consultas)
    indice.dataDaConsulta = 
}