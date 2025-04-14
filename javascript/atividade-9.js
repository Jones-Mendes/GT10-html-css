const user={
    email:"jonesoliver99@hotmail.com",
    senha:"123456"
}

if(user.email=="jonesoliver99@hotmail.com"){
    console.log("Email válido")
}

if(user.email=="jonesoliver99@hotmail.com" && user.senha =='12346'){
    console.log("Acesso autorizado")
}else{
    console.log("Acesso negado! verifique se seu email ou senha está correto")    
}