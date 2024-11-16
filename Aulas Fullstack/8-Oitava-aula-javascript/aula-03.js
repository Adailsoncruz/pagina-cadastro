function calcMedia(n1,n2,n3){
     return (n1 + n2 + n3) / 3;
}

// Função que calcula o valor de aluguel de um carro
// Classe do carro: basico, intermediario, compelto
// dias: numero de km rodados
// se o carro for basico, o valor é R$ 50,00 por dia e R$ 0,10 por km rodado
// se o carro for intermediario, o valor é R$ 80,00 por dia e R$ 0,15 por km rodado
// se o carro for completo, o valor é R$ 120,00 por dia e R$ 0,25 por km rodado

function calcAluguel(dias, km, classe){
        if(classe == 'basico'){
            return ( dias * 50) + (km * 0,10);
        }
        if(classe == 'intermediario'){
            return (dias * 80 ) + ( km * 0,15)
        }
        if(classe == 'completo'){
            return ( dias * 120 ) + ( km *0,25)
        }
} 


// função que avalia carro e retorna valor de mercado
// ano: ano de fabricação do carro
// km: número de km rodados
// se o carro for anterior a 2000, o valor é de R$ 15.000,00
// se o carro for de 2000 a 2010, o valor é de R$ 25.000.00
// se o carro for de 2011 a 2015, o valor é de R$ 35.000,00
// se o carro for de 2016 a 2020, o valor é de R$ 50.000,00
// se o carro for de 2021 em diante, o valor é de R$ 70.000,00
// reduzir R$ 0,50 por km rodado

function calcValorCarro(ano,km){
    if ( ano < 2000 ){
        return 15000 (km*0.50);
    }
    if (ano >= 2010 && ano <= 2010){
        return 25000 - (km*0.50)
    }
    if (ano >= 2011 && ano <= 2015){
        return 35000 - (km*0.50);
    }
    if (ano >= 2016 && ano <= 2020){
        return 50000 - (km*0.50)
    }
    if (ano >= 2021){
        return 70000 - (km*0.50)
    }
} 