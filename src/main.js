//Función de captura de datos para reflejar el nombre del jugador.
function captura(){
    var nombrejug = document.getElementById("nombre").value;
    if(nombrejug==""){
        alert("Es obligatorio ingresar un nombre para empezar");
        document.getElementById("nombre").focus();
    }else{
        alert("Hola " + nombrejug);
    }
}

//Función de contador de caracteres.
/*function contarCaract(){
    setInterval(function()){
        var c = getID("nombre");
        if (c.length>20){
            alert("Ingrese por favor un nombre válido.");
        }else{
            captura();
        }
    }
        

}*/