function chaveUsuario(){

    let usuario = 
    JSON.parse(
        localStorage.getItem("usuarioLogado")
    );


    if(!usuario){

        return null;

    }


    return "financeiro_" + usuario.email;

}





function salvarDados(){


    let chave = chaveUsuario();



    if(chave){

        localStorage.setItem(

            chave,

            JSON.stringify(movimentacoes)

        );

    }


}






function carregarDados(){


    let chave = chaveUsuario();



    if(chave){


        let dados =

        localStorage.getItem(chave);



        if(dados){


            movimentacoes =

            JSON.parse(dados);


        }else{


            movimentacoes=[];


        }


    }


}