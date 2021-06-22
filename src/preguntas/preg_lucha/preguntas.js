//--------------FUNCIONES DURANTE LAS TRIVIAS---------------------------//

let base_preguntas = readText("base-preguntas-lucha.json");
let interpretar_bp = JSON.parse(base_preguntas);
let pregunta
let posibles_respuestas
let btn_respectivo = [ //Arreglo de botones.
    select_id("resp1"),
    select_id("resp2"),
    select_id("resp3"),
    select_id("resp4")
]


window.onload = function(){
    base_preguntas = readText("base-preguntas-lucha.json");
    interpretar_bp = JSON.parse(base_preguntas);
    escogerPreguntaAleatoria();
}

//Función del cronómetro.
function cronom(){
    var cuentaRegre = 20;
    document.getElementById("cuenRegr").innerHTML = cuentaRegre;
    if(cuentaRegre == 0){
        alert("Su tiempo ha finalizado.");
    }else{
        cuentaRegre -= 1; // Quiere decir que va reduciendo de 1 en 1.
        setTimeout(cuentaRegre, 1E3); //El 1E3 es igual a escribir 1000, estoy pidiendo que en 1000 milisegundos reduzca el tiempo.
    }
}

//Función para seleccionar id.
function select_id(id){
    return document.getElementById(id)
}

//Función escoger pregunta.
function escogerPregunta(n){
    pregunta = interpretar_bp[n];

    select_id("label1").innerHTML = pregunta.categoria;
    select_id("label2").innerHTML = pregunta.pregunta;
    select_id("foto").setAttribute("src",pregunta.imagen);
    style("foto").objectFit = pregunta.objectFit;
    select_id("resp1").innerHTML = respunta.respuesta;
    select_id("resp2").innerHTML = respunta.incorrecta1;
    select_id("resp3").innerHTML = respunta.incorrecta2;
    select_id("resp4").innerHTML = respunta.incorrecta3;
    if(pregunta.imagen){
        style("foto").height = "200px";
        style("foto").width = "100%";
    }else{
        style("foto").height = "0px";
        style("foto").width = "0px";
    }
}

//Función para que pueda escoger las preguntas de forma aleatoria en Música.
function escogerPreguntaAleatoria(){
    escogerPreguntaAleatoria(Math.floor(Math.random()*interpretar_bp.lenght))
}


//Función para desordenar respuestas.
function desordenarRespuestas(pregunta){
    let posibles_respuestas = [ //Se le cambió el nombre al arr(de array o arreglo) para que se entienda.
        pregunta.respuesta,
        pregunta.incorrecta1,
        pregunta.incorrecta2,
        pregunta.incorrecta3
    ];
    posibles_respuestas.sort(()=>Math.random()-0.5);

    select_id("preg1").innerHTML = posibles_respuestas[0];
    select_id("preg2").innerHTML = posibles_respuestas[1];
    select_id("preg3").innerHTML = posibles_respuestas[2];
    select_id("preg4").innerHTML = posibles_respuestas[3];
}

//Función para presionar botones.
function presionar_boton(){
    if(posibles_respuestas[i]==pregunta.respuesta){
        btn_respectivo[i].style.background = "green";
    }else{
        btn_respectivo[i].style.background = "red";
    }
}

//Función para reiniciar los botones a blanco.
function reiniciarColores(){
    for(const btn of btn_respectivo){
        btn.style.background = "white";
    }
}

//Función de lectura de textos de ruta local, no global, para poder plasmar las preguntas.
function readText(ruta_local){
    var texto = null;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();

    if(xmlhttp.status == 200){
        texto = xmlhttp.responseText;
    }
    return texto;
}