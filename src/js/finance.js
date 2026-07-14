let movimentos = JSON.parse(
    localStorage.getItem("movimentos")
) || [];





function salvarMovimentos(){

    localStorage.setItem(
        "movimentos",
        JSON.stringify(movimentos)
    );

}






function adicionarMovimentacao(
    descricao,
    valor,
    tipo,
    categoria
){



let data = new Date();



let nova = {


id: Date.now(),


descricao: descricao,


valor: Number(valor),


tipo: tipo,


categoria: categoria,


data:
data.toLocaleDateString("pt-BR")


};





movimentos.push(nova);





salvarMovimentos();





mostrarMovimentos();



if(typeof atualizarDashboard === "function"){

    atualizarDashboard();

}



if(typeof atualizarGraficos === "function"){

    atualizarGraficos();

}


}







function mostrarMovimentos(){



let tabela =

document.getElementById("tabela");



if(!tabela){

    return;

}




tabela.innerHTML="";





movimentos.forEach(m => {



let linha = document.createElement("tr");





linha.innerHTML = `


<td>

${m.descricao}

</td>



<td>

R$ ${m.valor.toFixed(2)}

</td>




<td>

${m.tipo}

</td>



<td>

${m.categoria}

</td>



<td>

${m.data}

</td>




<td>


<button onclick="removerMovimento(${m.id})">

🗑️

</button>


</td>


`;






tabela.appendChild(linha);




});




}









function removerMovimento(id){



movimentos = movimentos.filter(

m => m.id !== id

);




salvarMovimentos();



mostrarMovimentos();



if(typeof atualizarDashboard === "function"){

    atualizarDashboard();

}



if(typeof atualizarGraficos === "function"){

    atualizarGraficos();

}



}








window.addEventListener(

"load",

()=>{


mostrarMovimentos();


}

);