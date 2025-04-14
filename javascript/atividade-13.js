//crie uma funçãopegue a idade, genero e cidade de um usuario
//Se o usuario for do sexo masculino e tiver mais de 18 anos
//Exibir Pode se alistar
//se o usuario for do sexo masculino e tiver menos de 18 anos
//Exibir não pode se alistar

const user = {
    Nome:"Jones",
    idade: 16,
    genero: "masculino",
    cidade: "Fortaleza",
}

function verficarAlistamento(user){
    if(user.genero === "masculino" && user.idade > 18){
        console.log("Pode se alistar")
        }else if(user.genero === "masculino" && user.idade < 18)
        console.log("Não pode se alistar")
        

}
verficarAlistamento(user)
