document
.getElementById("cadastrar")
.onclick=function(){



let nome =

document.getElementById("nome").value;



let email =

document.getElementById("email").value;



let senha =

document.getElementById("senha").value;





if(
nome=="" ||
email=="" ||
senha==""

){


alert("Preencha todos os campos");

return;


}





let usuarios =

JSON.parse(

localStorage.getItem("usuarios")

) || [];






let existe =

usuarios.find(

u=>u.email===email

);






if(existe){


alert("Este email já está cadastrado");

return;


}






let novoUsuario={


nome:nome,

email:email,

senha:senha


};





usuarios.push(novoUsuario);





localStorage.setItem(

"usuarios",

JSON.stringify(usuarios)

);





alert("Conta criada com sucesso!");





window.location.href="login.html";



};