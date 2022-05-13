var areaEntrada = document.getElementById('areaEntrada');
var btnEncriptar = document.getElementById('btnEncriptar');
var btnDesencriptar = document.getElementById('btnDesencriptar');
var areaSalida = document.getElementById('areaSalida');
var btnCopiar = document.getElementById('btnCopiar');

function borrarContenido(){
    areaEntrada.value = "";
}

function quitaracentos(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encriptar(){
    var textoUsuario = quitaracentos((areaEntrada.value).toLowerCase());
    var cadenaEncriptada="";
    var temporal="";
    for(posicion=0;posicion<=textoUsuario.length-1;posicion++){
        if(textoUsuario.charAt(posicion)=="a"){
            temporal = "ai";
        }else if (textoUsuario.charAt(posicion)=="e") {
            temporal = "enter";    
        } else if(textoUsuario.charAt(posicion)=="i"){
            temporal = "imes";
        }else if(textoUsuario.charAt(posicion)=="o"){
            temporal = "ober";
        }else if(textoUsuario.charAt(posicion)=="u"){
            temporal = "ufat";
        }else{
            temporal = textoUsuario.charAt(posicion);
        }
        cadenaEncriptada = cadenaEncriptada + temporal;
    }

    areaSalida.value = cadenaEncriptada;

}


function desencriptar(){
    var textoUsuario = areaEntrada.value;
    var temporal="";
    temporal = textoUsuario.replaceAll("ai", "a");
    temporal = temporal.replaceAll("enter", "e");
    temporal = temporal.replaceAll("imes", "i");
    temporal = temporal.replaceAll("ober", "o");
    temporal = temporal.replaceAll("ufat", "u");
    areaSalida.value = temporal;
}

function copiarTexto() {
    
    areaSalida.select();
    document.execCommand('copy');
}

areaEntrada.addEventListener("focus", borrarContenido);
btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click",desencriptar);
btnCopiar.addEventListener("click",copiarTexto);