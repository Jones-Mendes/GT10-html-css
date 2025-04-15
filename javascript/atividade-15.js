const user = {
    name: 'John Doe',
    altura: 1.75,
    peso: 93,
}




//criar uma função que receba o objeto user
// e calcular o IMC
// IMC=peso/(altura*altura)
function calcularIMC(user) {
    const alturaQuadrada = user.altura ** 2;
    const imc = user.peso / alturaQuadrada;
    
    if(imc<16){
        return console.log ('Magreza Grave')
        }
        if (imc >= 16 && imc < 17){
            return console.log ('Magreza Moderada')
        }
        if (imc >= 17 && imc < 18.5){   
            return console.log ('Magreza Leve')
                }
        if (imc >= 18.5 && imc < 25){
            return console.log ('Peso Normal')
               }
        if (imc >= 25 && imc < 30){
            return console.log ('Sobrepeso')
                }       
        if (imc >= 30 && imc < 35){
            return console.log ('Obesidade Grau I')
                }
        if (imc >= 35 && imc < 40){
            return console.log ('Obesidade Grau II')
                                }
        if (imc >= 40){
            return console.log ('Obesidade Grau III')
                }

   
    
    
    
        //console.log(imc.toFixed(2));
}
calcularIMC(user)

