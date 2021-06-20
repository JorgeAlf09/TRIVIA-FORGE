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