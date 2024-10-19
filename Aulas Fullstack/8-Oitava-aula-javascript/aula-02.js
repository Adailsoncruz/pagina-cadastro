const nome =  "Samuel"
const idade = 19
const listaProdutosMaiorDeIdade = [
    "51",
    "skol",
    "brahma",
    "antartica",
    "heineken",
]

const listaProdutosMenorDeIdade = [
    "suco",
    "refrigerante",
    "agua",
    "nescau",
    "toddynho"
]

if(idade >= 18){
    console.log("Você pode comprar bebida alcoólica")
    console.log(listaProdutosMaiorDeIdade)
} else{
    console.log("Você não pode comprar bebida alcoólica")
    console.log(listaProdutosMenorDeIdade)
}

