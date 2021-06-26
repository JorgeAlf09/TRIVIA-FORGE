//--------------FUNCIONES DURANTE LAS TRIVIAS---------------------------//
var cuentaRegre = 20; //PARA CRONÓMETRO
var cantPreg = 1; //PARA CRONÓMETRO
var img = document.getElementById("imagen");
var bckgrnd = document.getElementById("fondo");


//Función del cronómetro.
function cronom(){
    document.getElementById("countdown").innerHTML = cuentaRegre;
        if(cuentaRegre == 0){
            cuentaRegre = 20;
            alert("Su tiempo ha finalizado. Continúa con la siguiente pregunta");
            pregRecib();
            reiniciarCronom();
            cambioPreguntas();
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
    acomodarPanel1();
}

function mostrarPregyAlt2(){
    document.getElementById("categoria").innerHTML = "Lucha Libre";
    document.getElementById("pregunta").innerHTML = "¿En qué empresa debutó AJ Styles?";
    document.getElementById("resp1").innerHTML = "Total Nonstop Action";
    document.getElementById("resp2").innerHTML = "World Championship Wrestling";
    document.getElementById("resp3").innerHTML = "Ring of Honor";
    document.getElementById("resp4").innerHTML = "New Japan Pro Wrestling";
    acomodarPanel2();
}

function mostrarPregyAlt3(){
    document.getElementById("categoria").innerHTML = "Lucha Libre";
    document.getElementById("pregunta").innerHTML = "Selecciona el nombre del luchador.";
    document.getElementById("resp1").innerHTML = "Ricochet";
    document.getElementById("resp2").innerHTML = "Kazuchika Okada";
    document.getElementById("resp3").innerHTML = "Puma King";
    document.getElementById("resp4").innerHTML = "Will Ospreay";
    acomodarPanel3();
}

function mostrarPregyAlt4(){
    document.getElementById("categoria").innerHTML = "Lucha Libre";
    document.getElementById("pregunta").innerHTML = "¿Quién de las opciones, es la luchadora más veterana?";
    document.getElementById("resp1").innerHTML = "Mae Young";
    document.getElementById("resp2").innerHTML = "Trish Stratus";
    document.getElementById("resp3").innerHTML = "Lita";
    document.getElementById("resp4").innerHTML = "Alundra Blayze";
    acomodarPanel4();
}

//Función de acomodar todo el panel.
function acomodarPanel1(){
    img.setAttribute("src","../fotos trivias/lucha/walter.jpg");
    img.style.width = "600px";
    img.style.height = "370px";   
}

function acomodarPanel2(){
    img.setAttribute("src","../fotos trivias/lucha/ajstyles.jpg");
    img.style.width = "400px";
    img.style.height = "300px";
}

function acomodarPanel3(){
    img.setAttribute("src","../fotos trivias/lucha/willospreay.jpg");
    img.style.width = "400px";
    img.style.height = "350px";
}

function acomodarPanel4(){
    img.setAttribute("src","../fotos trivias/lucha/maeyoung.jpg");
    img.style.width = "400px";
    img.style.height = "300px";
}

//Función cambiar preguntas.
function cambioPreguntas(){
    if (cantPreg == 3){
        mostrarPregyAlt1 = null;
        mostrarPregyAlt2();
    }if(cantPreg == 4){
        mostrarPregyAlt2 = null;
        mostrarPregyAlt3();
    }if(cantPreg == 5){
        mostrarPregyAlt3 = null;
        mostrarPregyAlt4();
    }
}

cronom();
pregRecib();
mostrarPregyAlt1();