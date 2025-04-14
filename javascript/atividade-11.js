function aluguelCarro(dias){
if(dias> 15){
    const valorPorDia=200
    const valorTotal= valorPorDia * dias
    console.log(valorTotal)
}else {
    const valorPorDia =250
    const valorTotal = valorPorDia * dias
    console.log(valorTotal)
}
}


aluguelCarro(10)
aluguelCarro(15)
aluguelCarro(16)
