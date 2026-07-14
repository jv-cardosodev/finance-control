let usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
);



if(!usuarioLogado){

    window.location.href="login.html";

}





window.onload=function(){



    const nome = document.getElementById("usuarioNome");


    if(nome){

        nome.innerHTML = 
        "Olá, " + usuarioLogado.nome;

    }





    if(typeof carregarDados === "function"){

        carregarDados();

    }





    if(typeof atualizarTela === "function"){

        atualizarTela();

    }






    const botao = document.getElementById("btnAdicionar");



    if(botao){



        botao.onclick=function(){



            let descricao =
            document.getElementById("descricao").value;



            let valor =
            Number(
            document.getElementById("valor").value
            );



            let tipo =
            document.getElementById("tipo").value;



            let categoria =
            document.getElementById("categoria").value;





            if(
                descricao === "" ||
                valor <= 0
            ){

                alert("Preencha os dados corretamente");

                return;

            }






            adicionarMovimentacao(

                descricao,

                valor,

                tipo,

                categoria

            );





            document.getElementById("descricao").value="";

            document.getElementById("valor").value="";





            atualizarTela();



        };


    }



};