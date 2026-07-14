let clientes = JSON.parse(
    localStorage.getItem("clientes")
) || [];





function salvarClientes(){

    localStorage.setItem(
        "clientes",
        JSON.stringify(clientes)
    );

}






function mostrarClientes(filtro=""){



let tabela = document.getElementById("listaClientes");



if(!tabela){

    return;

}




tabela.innerHTML="";






clientes
.filter(cliente =>

cliente.nome
.toLowerCase()
.includes(
filtro.toLowerCase()
)

)

.forEach(cliente=>{



let linha = document.createElement("tr");





linha.innerHTML = `


<td>

${cliente.nome}

</td>



<td>

${cliente.telefone}

</td>



<td>

${cliente.email}

</td>



<td>


<button onclick="excluirCliente(${cliente.id})">

🗑️ Excluir

</button>



</td>


`;





tabela.appendChild(linha);



});




}









function adicionarCliente(){



let nome =

document.getElementById("nomeCliente").value;



let telefone =

document.getElementById("telefoneCliente").value;



let email =

document.getElementById("emailCliente").value;







if(nome==="" || email===""){



if(typeof notificar === "function"){


notificar(
"Preencha nome e email",
"erro"
);


}else{


alert(
"Preencha nome e email"
);


}


return;


}







let cliente = {


id: Date.now(),


nome:nome,


telefone:telefone,


email:email



};






clientes.push(cliente);



salvarClientes();



mostrarClientes();






document.getElementById("nomeCliente").value="";

document.getElementById("telefoneCliente").value="";

document.getElementById("emailCliente").value="";






if(typeof notificar === "function"){


notificar(
"Cliente cadastrado com sucesso!"
);


}





}









function excluirCliente(id){



clientes = clientes.filter(

cliente => cliente.id !== id

);





salvarClientes();



mostrarClientes();






if(typeof notificar === "function"){


notificar(
"Cliente removido",
"aviso"
);


}



}









document

.getElementById("adicionarCliente")

?.addEventListener(

"click",

adicionarCliente

);







document

.getElementById("pesquisaCliente")

?.addEventListener(

"input",

(e)=>{


mostrarClientes(
e.target.value
);


}

);







window.addEventListener(

"load",

()=>{


mostrarClientes();


}

);