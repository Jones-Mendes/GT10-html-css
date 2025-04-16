//armazenar valor dos inputs altura e peso

var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
//armazenar o valor do botão por id
var btn = document.getElementById("btn")
//armazenar o valor da DIV fim
var fim = document.getElementById("fim")


//função para calcular o IMC
function calcularIMC(){
//amarzenar o valor apenas do input
const valorAltura = altura.value
const valorPeso = peso.value

//calcular o IMC
const imc = valorPeso / (valorAltura**2)

return imc
}
//função de clck
function calcular(){ 
    //chamar a função calcularIMC e armazena o valor
    const imc = calcularIMC()
    var mensagem =""
    if(imc < 18.5){
        mensagem = "Abaixo do peso"
    }if(imc >= 18.5 && imc < 25){
        mensagem = "Peso normal"
     }if(imc >= 25 && imc < 30){
         mensagem = "Sobrepeso"
   }if(imc >= 30 && imc < 35){
         mensagem = "Obesidade grau 1"
    }if(imc >= 35 && imc < 40){
        mensagem = "Obesidade grau 2"
    }if(imc >= 40){
        mensagem = "Obesidade grau 3"
    }

    //renderizar o resultado na div fim
    fim.innerHTML = `
    <div class="linha"></div>
        <div class="resultado">
            <div class="esquerda">
                <h2>${imc.toFixed(2)}</h2>
                <p>Seu IMC</p>
            </div>
            <div class="direita">
            <p>${mensagem} </p>
            </div>
        </div>
        <div class="linha"></div>

    `
}

//adicionar evento de click no botão
btn.addEventListener("click", calcular)


