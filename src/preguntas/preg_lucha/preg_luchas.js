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
        }else{
            cuentaRegre--; // Quiere decir que va reduciendo de 1 en 1.
            setTimeout("cronom()", 1E3); //El 1E3 es igual a escribir 1000, estoy pidiendo que en 1000 milisegundos reduzca el tiempo.
        }

}

//Función cantidad de preguntas recibidas.
function pregRecib(){
    document.getElementById("cant_de_preg").innerHTML = cantPreg + " de 4";

    if(cantPreg == 5){
        alert("Se terminó el juego");
        document.getElementById("countdown").style.display = 'none';
        document.getElementById("cant_de_preg").innerHTML = "4 de 4";
        reiniciarCronom = null;

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


//Función mostrar preguntas y alternativas.
function mostrarPregyAlt1(){
    document.getElementById("categoria").innerHTML = "Lucha Libre";
    document.getElementById("pregunta").innerHTML = "¿Quién es el luchador con el reinado más largo en la era moderna de WWE?";
    document.getElementById("resp1").innerHTML = "Cm Punk";
    document.getElementById("resp2").innerHTML = "AJ Styles";
    document.getElementById("resp3").innerHTML = "Walter";
    document.getElementById("resp4").innerHTML = "Brock Lesnar";
}

cronom();
pregRecib();
mostrarPregyAlt1();