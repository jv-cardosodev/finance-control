let usuario =

JSON.parse(

localStorage.getItem("usuarioLogado")

);



if(!usuario){

window.location.href="login.html";

}




let movimentacoes=[];



function carregar(){

let chave =

"financeiro_" + usuario.email;



movimentacoes =

JSON.parse(

localStorage.getItem(chave)

) || [];



}




function gerarRelatorio(){


let entrada=0;

let saida=0;



movimentacoes.forEach(item=>{


if(item.tipo==="entrada"){

entrada+=item.valor;

}else{

saida+=item.valor;

}


});




document.getElementById("relEntrada").innerHTML =

"R$ "+entrada.toFixed(2);



document.getElementById("relSaida").innerHTML =

"R$ "+saida.toFixed(2);



document.getElementById("relSaldo").innerHTML =

"R$ "+(entrada-saida).toFixed(2);



document.getElementById("relQuantidade").innerHTML =

movimentacoes.length;



}





function exportarCSV(){



let texto =

"Descricao,Valor,Tipo,Categoria,Data\n";




movimentacoes.forEach(item=>{


texto +=

`${item.descricao},${item.valor},${item.tipo},${item.categoria},${item.data}\n`;



});




let arquivo =

new Blob(

[texto],

{type:"text/csv"}

);



let link =

document.createElement("a");



link.href =

URL.createObjectURL(arquivo);



link.download="relatorio_financeiro.csv";



link.click();



}




window.onload=function(){


carregar();


gerarRelatorio();



document
.getElementById("exportar")
.onclick=exportarCSV;


};