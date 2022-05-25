function imprimeTresCoresFavoritas() {
    const cor1:string = ("Insira sua primeira cor favorita")
    const cor2:string = ("Insira sua segunda cor favorita")
    const cor3:string =("Insira sua terceira cor favorita")

    console.log([cor1, cor2, cor3])
 }


function coresFavoritas(cor1: string, cor2: string, cor3: string): string[] {
const arrayCores = []
arrayCores.push(cor1, cor2, cor3)

    return arrayCores
}

console.log(imprimeTresCoresFavoritas())