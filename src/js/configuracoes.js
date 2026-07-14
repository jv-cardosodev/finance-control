function carregarPerfil(){


let usuario = JSON.parse(

localStorage.getItem("usuarioLogado")

);



if(!usuario){

return;

}




let nome = document.getElementById("nomeUsuario");


if(nome){

nome.value = usuario.nome;

}





}





document

.getElementById("salvarPerfil")

?.addEventListener(

"click",

()=>{


let usuario = JSON.parse(

localStorage.getItem("usuarioLogado")

);



let novoNome =

document.getElementById("nomeUsuario").value;



let novaSenha =

document.getElementById("senhaUsuario").value;






if(novoNome===""){


alert("Digite um nome");

return;


}





usuario.nome = novoNome;





if(novaSenha !== ""){


usuario.senha = novaSenha;


}





localStorage.setItem(

"usuarioLogado",

JSON.stringify(usuario)

);







let usuarios = JSON.parse(

localStorage.getItem("usuarios")

) || [];






let index = usuarios.findIndex(

u=>u.email===usuario.email

);






if(index>=0){


usuarios[index]=usuario;


localStorage.setItem(

"usuarios",

JSON.stringify(usuarios)

);


}






alert(

"Perfil atualizado!"

);




});





window.addEventListener(

"load",

carregarPerfil

);