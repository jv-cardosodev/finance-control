function atualizarTela(){


    const saldo = document.getElementById("saldo");
    const entrada = document.getElementById("totalEntrada");
    const saida = document.getElementById("totalSaida");
    const tabela = document.getElementById("tabela");



    if(!saldo || !entrada || !saida || !tabela){

        return;

    }



    saldo.innerHTML =
    "R$ " + calcularSaldo().toFixed(2);



    entrada.innerHTML =
    "R$ " + calcularEntradas().toFixed(2);



    saida.innerHTML =
    "R$ " + calcularSaidas().toFixed(2);



    tabela.innerHTML = "";




    movimentacoes.forEach(function(item,index){



        tabela.innerHTML += `

        <tr>

            <td>
            ${item.descricao}
            </td>


            <td>
            R$ ${item.valor.toFixed(2)}
            </td>


            <td>
            ${item.tipo}
            </td>


            <td>
            ${item.categoria}
            </td>


            <td>
            ${item.data}
            </td>


            <td>

            <button onclick="removerMovimentacao(${index})">
            Excluir
            </button>

            </td>


        </tr>

        `;



    });




    if(typeof atualizarGraficos === "function"){

        atualizarGraficos();

    }



}




function removerMovimentacao(index){


    movimentacoes.splice(index,1);


    salvarDados();


    atualizarTela();


}