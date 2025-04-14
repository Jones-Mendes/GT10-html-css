const user ={
    nome:"jones",
    idade: 17
}
const produtos = [
    {nome: "Maça", preco: 1.99},
    {nome: "Iphone", preco:5500},

]

const produtosMaiorDeIdade=[
    {nome: "51", preco: 50},
    {nome: "JackDaniels", preco: 150},
]

if(user.idade>='18'){
    console.log(produtos,produtosMaiorDeIdade)

}else{
    console.log(produtos)
}