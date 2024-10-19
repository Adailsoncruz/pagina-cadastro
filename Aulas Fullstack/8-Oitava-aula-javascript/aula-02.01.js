const user = {
    nome: "samuel",
    idade: 24
}

const listaProdutos = [
    {
        nome: "nescau",
        maiorDeIdade: false 
    },
    {
        nome: "Cachaça",
        maiorDeIdade: true
    },
    {
        nome:"suco",
        maiorDeIdade: false
    },
    {
        nome:"skol",
        maiorDeIdade:true
    }
]

if(user.idade >=18){
    console.log(listaProdutos)
} else{
    const produtosPermitidos = listaProdutos.filter(
        produto => produto.maiorDeIdade === false 
    )
    
    console.log(produtosPermitidos)
}