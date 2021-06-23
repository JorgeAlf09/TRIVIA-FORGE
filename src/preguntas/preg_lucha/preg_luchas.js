//--------------FUNCIONES DURANTE LAS TRIVIAS---------------------------//
var cuentaRegre = 20; //PARA CRONÓMETRO
var cantPreg = 1; //PARA CRONÓMETRO

//Función del cronómetro.
function cronom(){
    document.getElementById("countdown").innerHTML = cuentaRegre;
        if(cuentaRegre == 0){
            cuentaRegre = 20;
            alert("Su tiempo ha finalizado. Continúa con la siguiente pregunta");
            pregRecib();
            reiniciarCronom();
            detenerJuego();
        }else{
            cuentaRegre--; // Quiere decir que va reduciendo de 1 en 1.
            setTimeout("cronom()", 1E3); //El 1E3 es igual a escribir 1000, estoy pidiendo que en 1000 milisegundos reduzca el tiempo.
        }

}

//Función cantidad de preguntas recibidas.
function pregRecib(){
    document.getElementById("cant_de_preg").innerHTML = cantPreg + " de 4";

    if(cantPreg == 4){
        alert("Se terminó el juego");
    }else{
        cantPreg++;
    }
}

//Función reiniciar cronómetro.
function reiniciarCronom(){
    document.getElementById("countdown").innerHTML = cuentaRegre;
    if(cronom()==0){
        cuentaRegre = 20;
    }
}

//Función de detener cuenta regresiva.
function detenerJuego(){
    document.getElementById("cant_de_preg").innerHTML = cantPreg + " de 4";
    if(cantPreg==4){
        document.getElementById("countdown").style.display = 'none';
    }
}

cronom();
pregRecib();