//--------------FUNCIONES DURANTE LAS TRIVIAS---------------------------//
var cuentaRegre = 20;
//Función del cronómetro.
function cronom(){
    
    document.getElementById('countdown').innerHTML = cuentaRegre;

    if(cuentaRegre == 0){
        alert("Su tiempo ha finalizado.");
    }else{
        cuentaRegre -= 1; // Quiere decir que va reduciendo de 1 en 1.
        cuentaRegre = cuentaRegre -1;
        setTimeout(cuentaRegre, 1E3); //El 1E3 es igual a escribir 1000, estoy pidiendo que en 1000 milisegundos reduzca el tiempo.
    }
}

cronom();