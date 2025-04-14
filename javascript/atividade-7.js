//uma lista de modelo de carros
const modelo =["Fiat", "BMW", "Ford", "Mercedes"]


//adicionar um novo modelo no final da lista

modelo.push("Tesla")
    console.log(modelo)

//contagem 
console.log(modelo.length)

modelo.push("Toyota")
console.log(modelo)

//remover o ultimo modelo
modelo.pop()
console.log(modelo.length)
console.log(modelo)

//Remover um modelo especifico
modelo.splice(1,1)
console.log(modelo)


