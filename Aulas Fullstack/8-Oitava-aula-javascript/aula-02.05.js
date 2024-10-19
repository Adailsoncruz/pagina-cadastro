function calcArea(base, altura, valor){
    const area = base * altura

    const resultado = area * valor

    return resultado
}

console.log((4, 6, 130))

// a função receberá dois valores n1 e n2,
// e tbm receberá a operação
// que será realizada no formato de string
// ex func(4,6,"soma") = 10

function calculo(n1,n2,op){
    if(op === "soma" ){
        return n1 + n2
    }
    if(op === "subtração"){
        return n1 - n2
    }
    if(op === "multiplicação"){
        return n1 * n2
    }
    if(op === "Divisão"){
        return n1 / n2 
    }

}

console.log(4,6, "soma")