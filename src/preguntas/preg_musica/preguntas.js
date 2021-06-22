//--------------FUNCIONES DURANTE LAS TRIVIAS---------------------------//

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
    let base_preguntas = readText("base-preguntas-musica.json")
    let refleja_bp = JSON.parse(base_preguntas)

    preguntasMusica(Math.floor(Math.random()*refleja_bp.lenght))
}