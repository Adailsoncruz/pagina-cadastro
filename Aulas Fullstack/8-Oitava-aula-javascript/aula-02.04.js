function Soma(n1,n2){
      const calculo = n1 + n2;

      console.log(calculo)
}

function validateSenha(senha){

    if(senha === undefined){
        console.log("Ajuste a senha")
        return
    }

     const senhaQt = senha.length;
     if(senhaQt >=6){
        console.log("senha valida")
    }else{
        console.log("senha invalida")
    }

 }

validateSenha()


 

