//Función para validar que no hayan números.
function SoloLetras(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyzáéíóú";
    especiales = "8-37-38-46-164";//array
    teclado_especial = false;

    for(var i in especiales){
        if(key == especiales [i]){
            teclado_especial = true; break;
        }
    }

    if(letras.indexOf(teclado) == -1 && !teclado_especial){
        alert("El caracter ingresado no es válido, por favor ingresar un nombre válido omitiendo números.");
    }

}

//Función de captura de datos para reflejar el nombre del jugador.
function captura(){
    var nombrejug = document.getElementById("txtbox").value;
    if(nombrejug == ""){
        alert("Es obligatorio ingresar un nombre para empezar");
        document.getElementById("txtbox").focus();
    }else{
        document.querySelector('#saludjug').innerText = "HOLA "+ nombrejug;
        ocultarIngreNom();
        mostrarIngreNom();
    }
}

//Función ocultar elementos para cuando se ingresa el nombre.
function ocultarIngreNom(){
    document.getElementById("txtbox").style.display = 'none';
    document.getElementById("btn").style.display = 'none';
}

//Función mostrar elementos para cuando se ingresa el nombre.
function mostrarIngreNom(){
    document.getElementById("tipoA").style.display = 'block';
    document.getElementById("tipoB").style.display = 'block';
    document.getElementById("label2").style.display = 'block';
}

//Función ocultar elementos para cuando Se elige el tipo de pregunta Música.
function ocultarMusica(){
    document.getElementById("label1").style.display = 'none';
    document.getElementById("saludjug").style.display = 'none';
    document.getElementById("label2").style.display = 'none';
    document.getElementById("tipoA").style.display = 'none';
    document.getElementById("tipoB").style.display = 'none';
}

//Función ocultar elementos para cuando Se elige el tipo de pregunta Música.
function mostrarMusica(){
    document.getElementById("btnEmp1").style.display = 'block';
    document.getElementById("label3").style.display = 'block';
    document.getElementById("btnVolver").style.display = 'block';
}

//Función que une las 2 funciones para el botón de Música.
function btnMusica(){
    ocultarMusica();
    mostrarMusica();
}

//Función ocultar elementos para cuando Se elige el tipo de pregunta Música.
function ocultarLucha(){
    document.getElementById("label1").style.display = 'none';
    document.getElementById("saludjug").style.display = 'none';
    document.getElementById("label2").style.display = 'none';
    document.getElementById("tipoA").style.display = 'none';
    document.getElementById("tipoB").style.display = 'none';
}

//Función ocultar elementos para cuando Se elige el tipo de pregunta Música.
function mostrarLucha(){
    document.getElementById("btnEmp2").style.display = 'block';
    document.getElementById("label3").style.display = 'block';
    document.getElementById("btnVolver").style.display = 'block';
}

//Función que une las 2 funciones para el botón de Música.
function btnLucha(){
    ocultarLucha();
    mostrarLucha();
}

//Función para que retorne a la página de inicio.
function volverHome(){
    document.getElementById("btnEmp1").style.display = 'none';
    document.getElementById("btnEmp2").style.display = 'none';
    document.getElementById("label3").style.display = 'none';
    document.getElementById("btnVolver").style.display = 'none';
    document.getElementById("label1").style.display = 'block';
    document.getElementById("saludjug").style.display = 'block';
    document.getElementById("txtbox").style.display = 'block';
    document.getElementById("btn").style.display = 'block';
    document.querySelector('#saludjug').innerText = "POR FAVOR INGRESA TU NOMBRE";
    document.getElementById("txtbox").value = "";
}