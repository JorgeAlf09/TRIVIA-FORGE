//--------------FUNCIONES DURANTE LAS TRIVIAS---------------------------//

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
    let base_preguntas = readText("base-preguntas-lucha.json");
    let interpretar_bp = JSON.parse(base_preguntas);
    pregunta = interpretar_bp[n];
    select_id("label1").innerHTML = pregunta.categoria;
    select_id("label2").innerHTML = pregunta.pregunta;
    select_id("foto").setAttribute("src",pregunta.foto)
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


//Función para que pueda escoger las preguntas de forma aleatoria en Música.
function preguntasMusica(){
    let base_preguntas = readText("base-preguntas-lucha.json")
    let refleja_bp = JSON.parse(base_preguntas)

    preguntasMusica(Math.floor(Math.random()*refleja_bp.lenght))
}