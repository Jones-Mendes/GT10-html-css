//função que receba um objeto carro
//o objeto contem as propriedades:
//modelo, ano, cor e km
//se o carro for maior que 2020 ou tiver menos que 1000km
//exibir "Carro Novo"
//se não exibe carro usado

const carro = {
    modelo: 'Fusca',
    ano: 2021,
    cor: 'Azul',
    km: 800
}

function verificarCarro(carro){
    if(carro.ano > 2020 || carro.km < 1000){    
        console.log('Carro Novo')
    } else {
    console.log('Carro Usado')
    }
        
}
verificarCarro(carro)