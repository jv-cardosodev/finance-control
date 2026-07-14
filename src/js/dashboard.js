function atualizarDashboard(){


let movimentos =

JSON.parse(

localStorage.getItem("movimentos")

) || [];




let entradas = 0;

let saidas = 0;






movimentos.forEach(m => {



if(m.tipo === "entrada"){


entradas += Number(m.valor);


}else{


saidas += Number(m.valor);


}



});





let saldo = entradas - saidas;







let entradaTela =
document.getElementById("totalEntrada");

let saidaTela =
document.getElementById("totalSaida");

let saldoTela =
document.getElementById("saldo");

let quantidade =
document.getElementById("qtdMovimentos");






if(entradaTela)

entradaTela.innerHTML =

"R$ " + entradas.toFixed(2);





if(saidaTela)

saidaTela.innerHTML =

"R$ " + saidas.toFixed(2);





if(saldoTela)

saldoTela.innerHTML =

"R$ " + saldo.toFixed(2);





if(quantidade)

quantidade.innerHTML =

movimentos.length;



}





window.addEventListener(

"load",

atualizarDashboard

);