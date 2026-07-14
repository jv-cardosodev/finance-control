let graficoMovimento;

let graficoCategoria;





function atualizarGraficos(){



let movimentos = JSON.parse(

localStorage.getItem("movimentos")

) || [];





let entradas = 0;

let saidas = 0;



let categorias = {};





movimentos.forEach(m => {



if(m.tipo === "entrada"){


entradas += Number(m.valor);


}else{


saidas += Number(m.valor);


}





if(!categorias[m.categoria]){


categorias[m.categoria] = 0;


}



categorias[m.categoria] += Number(m.valor);



});








// GRAFICO BARRAS



let ctx1 = document

.getElementById("graficoMovimento");




if(ctx1){



if(graficoMovimento){

graficoMovimento.destroy();

}





graficoMovimento = new Chart(

ctx1,


{


type:"bar",



data:{


labels:[

"Entradas",

"Saídas"

],



datasets:[{


label:"Valores",

data:[

entradas,

saidas

],



backgroundColor:[

"#16a34a",

"#dc2626"

]

}]

},




options:{


responsive:true,


plugins:{


legend:{


display:false


}


}



}



}

);



}










// GRAFICO PIZZA



let ctx2 = document

.getElementById("graficoCategoria");





if(ctx2){



if(graficoCategoria){


graficoCategoria.destroy();


}





graficoCategoria = new Chart(

ctx2,

{


type:"doughnut",



data:{


labels:

Object.keys(categorias),




datasets:[{


data:

Object.values(categorias),



backgroundColor:[


"#2563eb",

"#16a34a",

"#f59e0b",

"#dc2626",

"#8b5cf6"


]



}]


},





options:{


responsive:true


}



}

);



}





}






window.addEventListener(

"load",

()=>{


atualizarGraficos();


}

);