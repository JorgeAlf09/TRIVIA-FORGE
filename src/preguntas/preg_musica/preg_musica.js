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
    document.getElementById("categoria").innerHTML = "Música";
    document.getElementById("pregunta").innerHTML = "¿Cuál fue el álbum más vendido en la historia, de Michael Jackson?";
    document.getElementById("resp1").innerHTML = "Off The Wall";
    document.getElementById("resp2").innerHTML = "Thriller";
    document.getElementById("resp3").innerHTML = "Dangerous";
    document.getElementById("resp4").innerHTML = "Bad";
    acomodarPanel1();
}

function mostrarPregyAlt2(){
    document.getElementById("categoria").innerHTML = "Música";
    document.getElementById("pregunta").innerHTML = "Menciona el primer álbum de Metallica";
    document.getElementById("resp1").innerHTML = "Kill 'Em All";
    document.getElementById("resp2").innerHTML = "...And Justice For All";
    document.getElementById("resp3").innerHTML = "Master Of Puppets";
    document.getElementById("resp4").innerHTML = "Metallica(Black Album)";
    acomodarPanel2();
}

function mostrarPregyAlt3(){
    document.getElementById("categoria").innerHTML = "Música";
    document.getElementById("pregunta").innerHTML = "¿Quién cantó I Will Always Love You?";
    document.getElementById("resp1").innerHTML = "Sarah McLachlan";
    document.getElementById("resp2").innerHTML = "Whitney Houston";
    document.getElementById("resp3").innerHTML = "Tina Turner";
    document.getElementById("resp4").innerHTML = "Celine Dion";
    acomodarPanel3();
}

function mostrarPregyAlt4(){
    document.getElementById("categoria").innerHTML = "Música";
    document.getElementById("pregunta").innerHTML = "¿A qué álbum pertenece la canción Jeremy, de Pearl Jam?";
    document.getElementById("resp1").innerHTML = "Yield";
    document.getElementById("resp2").innerHTML = "Lightning Bolt";
    document.getElementById("resp3").innerHTML = "Ten";
    document.getElementById("resp4").innerHTML = "No Code";
    acomodarPanel4();
}

//Función de acomodar todo el panel.
function acomodarPanel1(){
    img.setAttribute("src","../fotos trivias/música/michaeljackson.jpg");
    img.style.width = "600px";
    img.style.height = "370px";   
}

function acomodarPanel2(){
    img.setAttribute("src","../fotos trivias/música/metallica.jpg");
    img.style.width = "670px";
    img.style.height = "370px";
}

function acomodarPanel3(){
    img.setAttribute("src","../fotos trivias/música/titanic.jpg");
    img.style.width = "400px";
    img.style.height = "400px";
}

function acomodarPanel4(){
    img.setAttribute("src","../fotos trivias/música/pearljam.jpg");
    img.style.width = "650px";
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