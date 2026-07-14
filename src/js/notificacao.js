function notificar(mensagem,tipo="sucesso"){



let caixa = document.createElement("div");


caixa.className =

"notificacao " + tipo;




caixa.innerHTML = mensagem;





document.body.appendChild(caixa);





setTimeout(()=>{


caixa.classList.add("mostrar");


},100);







setTimeout(()=>{


caixa.classList.remove("mostrar");



setTimeout(()=>{


caixa.remove();



},500);



},3000);




}