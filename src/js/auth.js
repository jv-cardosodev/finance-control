document
.getElementById("entrar")
.onclick=function(){



let email =

document.getElementById("email").value;



let senha =

document.getElementById("senha").value;





if(
email=="" ||
senha==""

){

alert("Digite email e senha");

return;

}






let usuarios =

JSON.parse(

localStorage.getItem("usuarios")

) || [];






let usuario =

usuarios.find(

u =>

u.email === email &&

u.senha === senha

);







if(!usuario){


alert("Email ou senha incorretos");


return;


}







localStorage.setItem(

"usuarioLogado",

JSON.stringify(usuario)

);






window.location.href="index.html";



};// MOSTRAR USUÁRIO LOGADO

function mostrarUsuario(){


let usuario = JSON.parse(

localStorage.getItem("usuarioLogado")

);



let campo = document.getElementById("usuarioNome");



if(usuario && campo){


campo.innerHTML =

"Olá, " + usuario.nome;


}



}




window.addEventListener(

"load",

mostrarUsuario

);