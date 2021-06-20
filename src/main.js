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
    var nombrejug = document.getElementById("nombre").value;
    if(nombrejug == ""){
        alert("Es obligatorio ingresar un nombre para empezar");
        document.getElementById("nombre").focus();
    }else if(nombrejug == ""){
        alert("El caracter ingresado no es válido, por favor ingresar un nombre válido");
    }else{
        document.querySelector('#saludjug').innerText = "HOLA "+ nombrejug;
    }
}