document
.getElementById("entrar")
.onclick=function(){



let email =

document.getElementById("email").value;



let senha =

document.getElementById("senha").value;




if(
loginUsuario(email,senha)
){

window.location.href="index.html";


}else{


alert("Login inválido");


}



};





document
.getElementById("cadastrar")
.onclick=function(){


let nome =

document.getElementById("nome").value;



let email =

document.getElementById("emailCadastro").value;



let senha =

document.getElementById("senhaCadastro").value;



cadastrarUsuario(

nome,

email,

senha

);



alert("Usuário criado!");


};